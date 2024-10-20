import {} from "styled-components";
import { Theme } from "./Theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

declare module "*.svg" {

  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}