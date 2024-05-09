/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */


import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  const NoFollow = (
    <meta name="robots" content="noindex" />
  );
  setHeadComponents([NoFollow]);
};