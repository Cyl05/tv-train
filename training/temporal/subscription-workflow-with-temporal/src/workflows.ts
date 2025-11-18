import {
  proxyActivities,
  log,
  workflowInfo,
  sleep,
  defineQuery,
  setHandler,
  defineSignal,
  condition,
} from "@temporalio/workflow";
import type * as activities from "./activities";
import { Customer } from "./shared";

const {
  sendWelcomeEmail,
  sendSubscriptionFinishedEmail,
  chargeCustomerForBillingPeriod,
  sendCancellationEmailDuringTrialPeriod,
  sendSubscriptionOverEmail,
} = proxyActivities<typeof activities>({
  startToCloseTimeout: "5 seconds",
});

export const customerIdNameQuery = defineQuery<string>("customerIdName");
export const billingPeriodNumberQuery = defineQuery<number>("billingPeriodNumber");
export const totalChargedAmountQuery = defineQuery<number>("totalChargedAmount");

export const cancelSubscription = defineSignal("cancelSubscription");
export const updateBillingChargeAmount = defineSignal<[number]>("updateBillingChargeAmount");

export async function subscriptionWorkflow(
  customer: Customer
): Promise<string> {
  let subscriptionCancelled = false;
  let totalCharged = 0;
  let billingPeriodNumber = 1;
  let billingPeriodChargeAmount = customer.subscription.initialBillingPeriodCharge;

  setHandler(customerIdNameQuery, () => customer.id);
  setHandler(billingPeriodNumberQuery, () => billingPeriodNumber);
  setHandler(totalChargedAmountQuery, () => totalCharged);

  setHandler(cancelSubscription, () => {
    subscriptionCancelled = true;
  });
  setHandler(updateBillingChargeAmount, (newAmount: number) => {
    billingPeriodChargeAmount = newAmount;
    log.info(
      `Updating BillingPeriodChargeAmount to ${billingPeriodChargeAmount}`
    );
  });

  await sendWelcomeEmail(customer);

  if (
    await condition(
      () => subscriptionCancelled,
      customer.subscription.trialPeriod
    )
  ) {
    await sendCancellationEmailDuringTrialPeriod(customer);
    return `Subscription finished for: ${customer.id}`;
  } else {
    while (true) {
      if (billingPeriodNumber > customer.subscription.maxBillingPeriods) break;

      if (subscriptionCancelled) {
        await sendSubscriptionFinishedEmail(customer);
        return `Subscription finished for: ${customer.id}, Total Charged: ${totalCharged}`;
      }

      log.info(`Charging ${customer.id} amount ${billingPeriodChargeAmount}`);

      await chargeCustomerForBillingPeriod(customer, billingPeriodChargeAmount);
      totalCharged += billingPeriodChargeAmount;
      billingPeriodNumber++;

      await sleep(customer.subscription.billingPeriod);
    }

    await sendSubscriptionOverEmail(customer);
    return `Completed ${
      workflowInfo().workflowId
    }, Total Charged: ${totalCharged}`;
  }
}