import { NextPage } from "next";

export type JSXElementWithLayout = JSX.Element & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface GetLayoutArguments {
  Component: React.ReactElement;
}
