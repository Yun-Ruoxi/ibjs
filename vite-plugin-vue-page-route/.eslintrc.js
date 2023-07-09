module.exports = {
  extends: ['ibjs'],
  overrides: [
    {
      files: ['./scripts/*.ts'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};
