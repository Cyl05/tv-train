import { TASK_QUEUE_NAME } from "./shared";
import { NativeConnection, Worker } from "@temporalio/worker";
import * as activities from "./activities";

async function run() {
  const connection = await NativeConnection.connect({
    address: "localhost:7233",
  });
  
  const worker = await Worker.create({
    connection,
    workflowsPath: require.resolve("./workflows"),
    activities,
    taskQueue: TASK_QUEUE_NAME,
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});