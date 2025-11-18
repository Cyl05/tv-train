import { Connection, Client } from "@temporalio/client";
import { subscriptionWorkflow } from "../workflows";
import { TASK_QUEUE_NAME, Customer } from "../shared";

const customer: Customer = {
  firstName: "Grant",
  lastName: "Fleming",
  email: "email-1@customer.com",
  subscription: {
    trialPeriod: 2000,
    billingPeriod: 2000,
    maxBillingPeriods: 12,
    initialBillingPeriodCharge: 100,
  },
  id: "ABC123",
};

async function run() {
  const connection = await Connection.connect({ address: "localhost:7233" });
  const client = new Client({
    connection,
  });
  const subscriptionWorkflowExecution = await client.workflow.start(
    subscriptionWorkflow,
    {
      args: [customer],
      taskQueue: TASK_QUEUE_NAME,
      workflowId: `subscription-${customer.id}`,
    }
  );

  for (let i = 1; i <= 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 2500)); 
    try {
      const billingPeriodNumber =
        await subscriptionWorkflowExecution.query<number>(
          "billingPeriodNumber"
        );
      const totalChargedAmount =
        await subscriptionWorkflowExecution.query<number>("totalChargedAmount");

      console.log("Workflow Id", subscriptionWorkflowExecution.workflowId);
      console.log("Billing Period", billingPeriodNumber);
      console.log("Total Charged Amount", totalChargedAmount);
    } catch (err) {
      console.error(
        `Error querying workflow with ID ${subscriptionWorkflowExecution.workflowId}:`,
        err
      );
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});