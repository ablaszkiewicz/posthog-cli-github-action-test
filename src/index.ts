import { PostHog } from "posthog-node";

const client = new PostHog("phc_hRSdq0cEBxBozgU5Qloq1sZRVyT3CWSy35VwMCZbtNc", {
  host: "http://localhost:8010",
  enableExceptionAutocapture: true,
});
client.debug(true);

const version = "v4";

async function main2() {
  client.captureException(
    "This happened in dev in backend (B)",
    `${Math.random()}`,
    {
      $exception_fingerprint: version + "B",
      demoExceptionVersion: version,
      environment: "dev",
      service: "backend",
    }
  );
  client.captureException(
    "This happened in dev in frontend (C)",
    `${Math.random()}`,
    {
      $exception_fingerprint: version + "C",
      demoExceptionVersion: version,
      environment: "dev",
      service: "frontend",
    }
  );
  client.captureException(
    "This happened in dev in database (F)",
    `${Math.random()}`,
    {
      $exception_fingerprint: version + "F",
      demoExceptionVersion: version,
      environment: "dev",
      service: "database",
    }
  );
  client.captureException(
    "This happened in prod in backend (D)",
    `${Math.random()}`,
    {
      $exception_fingerprint: version + "D",
      demoExceptionVersion: version,
      environment: "prod",
      service: "backend",
    }
  );
  client.captureException(
    "This happened in prod in frontend (E)",
    `${Math.random()}`,
    {
      $exception_fingerprint: version + "E",
      demoExceptionVersion: version,
      environment: "prod",
      service: "frontend",
    }
  );
  client.captureException(
    "This happened in prod in database (G)",
    `${Math.random()}`,
    {
      $exception_fingerprint: version + "G",
      demoExceptionVersion: version,
      environment: "prod",
      service: "database",
    }
  );
  await client.shutdown();
}

main2();
