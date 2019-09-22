/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
require('dotenv').config({
  path:
    process.env.NODE_ENV === 'development'
      ? '.env.dev'
      : process.env.NODE_ENV === 'production'
      ? '.env.prod'
      : '.env',
});
// You can delete this file if you're not using it
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      style: true,
    },
  });
};
exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@redux-dir': path.resolve(__dirname, 'src/redux'),
      },
    },
  });
};
