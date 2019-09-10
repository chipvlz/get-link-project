/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import wrapWithProvider from './src/redux/store';
import GatsbyLayout from './src/layouts';

export const wrapRootElement = wrapWithProvider;
export const wrapPageElement = GatsbyLayout;
