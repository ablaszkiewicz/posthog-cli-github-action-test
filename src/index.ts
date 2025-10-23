import { PostHog } from "posthog-node";
import { otherFileFunctionUpdateCustomProjectZ } from "./some-other-file";

const client = new PostHog("phc_PsVKi7b2xAu14LqBSvU7OcJTezht8ltFAf8IKug5MGu", {
  host: "http://localhost:8010",
  enableExceptionAutocapture: true,
});
client.debug(true);

async function executeCommand(command: string, sessionId: string) {}

async function mainTest6() {
  const customerId = "123";

  client.captureException(
    new Error("this is main error", {
      cause: new Error("this is cause error", {
        cause: "this is cause error string cause",
      }),
    }),
    customerId
  );

  await client.shutdown();
}

mainTest6();

async function main2() {
  client.captureException(new Error("Test"), `${Math.random()}`, {
    $browser: "Chrome",
  });
  client.captureException(new Error("Test"), `${Math.random()}`, {
    $browser: "Chrome",
  });
  client.captureException(new Error("Test"), `${Math.random()}`, {
    $browser: "Chrome",
  });
  client.captureException(new Error("Test"), `${Math.random()}`, {
    $browser: "Chrome",
  });
  client.captureException(new Error("Test"), `${Math.random()}`, {
    $browser: "Chrome",
  });
  client.captureException(new Error("Test"), `${Math.random()}`, {
    $browser: "Chrome",
  });
  client.captureException(new Error("Test"), `${Math.random()}`, {
    $browser: "Safari",
  });
  client.captureException(new Error("Test"), `${Math.random()}`, {
    $browser: "Safari",
  });
  client.captureException(new Error("Test"), `${Math.random()}`, {
    $browser: "Firefox",
  });
  await client.shutdown();
}
