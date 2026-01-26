import { PostHog } from "posthog-node";

const client = new PostHog("phc_Gp1YeM57pFOJEo2nYVxQIXyytvX79SH51VGbbFHEENG", {
  host: "http://localhost:8010",
  enableExceptionAutocapture: true,
});
client.debug(true);

async function main2() {
  const fingerprint = crypto.randomUUID();
  client.captureException(
    new TypeError("(psycopg2.errors.ForeignKeyViolation) update or delete on table \"product_versions\" violates foreign key constraint \"fk_product_reviews_previous_version\" on table \"product_reviews\" DETAIL: Key (product_id, version_number)=(019bb1f5-9bf6-7850-ad27-3554e7f5b51e, 1) is still referenced from table \"product_reviews\". [SQL: DELETE FROM product_versions WHERE product_versions.product_id = %(product_id)s AND product_versions.version_number = %(version_number)s] [parameters: {'product_id': '019bb1f5-9bf6-7850-ad27-3554e7f5b51e', 'version_number': 1}] (Background on this error at: https://sqlalche.me/e/20/gkpj)"),
    "exception number " + fingerprint,
    {
      $exception_fingerprint: fingerprint,
    }
  );
  await client.shutdown();
}

main2();

// Error executing function on event 019bf9f1-f792-7f32-a097-f8707a0bada4: Error('Failed to post create issue in Linear: 500: {\'errors\': [{\'message\': \'Syntax Error: Unterminated string.\n\nGraphQL request:1:263\n1 | mutation IssueCreate { issueCreate(input: { title: "TypeError" description: "(ps\n  | ycopg2.errors.ForeignKeyViolation) update or delete on table \\"product_versions\\\n  | " violates foreign key constraint \\"fk_product_reviews_previous_version\\" on tab\n  | le \\"product_reviews\\"\n  |                       ^\', \'extensions\': {\'code\': \'GRAPHQL_VALIDATION_FAILED\', \'type\': \'graphql error\', \'userError\': true}}]}')