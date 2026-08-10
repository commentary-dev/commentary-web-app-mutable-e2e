# Mutable Web App Review Fixture

This app is reserved for `commentary-test/commentary-web-app-mutable-e2e`.

Use it only for authenticated or agent automation that needs to create comments, change routes, update deployments, or validate agent handoff against mutable preview state.

The route matrix covers frameable and unframeable pages with and without SDK 0.3, an overlay-blocked CSP, a full-page authentication redirect, and an exact-origin drift redirect. These routes are controlled test surfaces; they must not be repointed at arbitrary third-party sites.
