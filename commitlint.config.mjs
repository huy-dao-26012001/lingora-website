const config = {
  extends: ["@commitlint/config-conventional"],

  parserPreset: {
    parserOpts: {
      headerPattern: /^([a-z]+): (.+) #(\d+)$/,
      headerCorrespondence: ["type", "subject", "issue"],
    },
  },

  rules: {
    "type-enum": [2, "always", ["chore", "feat", "fix", "hotfix", "docs", "refactor", "test"]],

    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "header-max-length": [2, "always", 100],
  },
};

export default config;
