import { PostHog } from "posthog-node";
import { otherFileFunctionUpdateCustomProject } from "./some-other-file";

const client = new PostHog("phc_PsVKi7b2xAu14LqBSvU7OcJTezht8ltFAf8IKug5MGu", {
  host: "http://localhost:8010",
  enableExceptionAutocapture: true,
});
client.debug(true);

// async function main() {
//   otherFileFunctionUpdateCustomProject();

//   await client.shutdown();
// }

// main();

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

main2();
