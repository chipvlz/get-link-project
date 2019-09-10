/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import wrapWithProvider from './src/redux/store';
import GatsbyLayout from './src/layouts';

export const wrapRootElement = wrapWithProvider;
export const wrapPageElement = GatsbyLayout;
