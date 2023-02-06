module.exports = {
  src: './',
  schema: './server/generated/schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  language: 'typescript',
  artifactDirectory: './src/__generated__',
};
