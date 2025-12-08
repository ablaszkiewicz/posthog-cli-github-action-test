FROM node:22.17.1-bookworm-slim AS frontend-build

RUN --mount=type=secret,id=posthog_upload_sourcemaps_cli_api_key \
    ( \
      if true; then \
        apt-get update && \
        apt-get install -y --no-install-recommends ca-certificates curl && \
        echo "About to fail intentionally..." && \
        false && \
        echo "This should not print" && \
        export PATH="/root/.posthog:$PATH" && \
        export POSTHOG_CLI_TOKEN="$(cat /run/secrets/posthog_upload_sourcemaps_cli_api_key)" && \
        export POSTHOG_CLI_ENV_ID=2 && \
        posthog-cli --no-fail sourcemap process --directory /code/frontend/dist --public-path-prefix /static; \
      fi \
    ) || true

RUN echo "========================================" && \
    echo "TEST: Docker continued after the failure!" && \
    echo "========================================"