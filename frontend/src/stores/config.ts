import { configure } from "mobx";

// These are defaults to get started. They might need to be disabled.
// see: https://mobx.js.org/configuration.html#linting-options
configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  disableErrorBoundaries: false,
});
