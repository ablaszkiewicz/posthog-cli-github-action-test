import { PostHog } from "posthog-node";

const client = new PostHog("phc_localposthogprojecttoken", {
  enableExceptionAutocapture: true,
  host: "http://localhost:8010",
});

client.debug(true);



async function main2() {
  while (true) {
    const batch = Array.from({ length: 5 }, (_, i) =>
      client.captureException(
        new TypeError(`ANOTHER ONE 1`),
        'oi2u3bn4538hf3n8',
        {
          $exception_fingerprint: `ANOTHER ONE 1`,
        }
      )
    );
    await Promise.all(batch);
    await client.flush();
    await new Promise((resolve) => setTimeout(resolve, 2_000));
  }
}

main2();
