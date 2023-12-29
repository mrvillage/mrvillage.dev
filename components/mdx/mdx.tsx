import * as React from "react";
import { getMDXComponent } from "next-contentlayer/hooks";
import { components } from "./components";
import { env } from "@/lib/env";
import ReactDOM from "react-dom";

import _jsx_runtime from "react/jsx-runtime";

interface MdxProps {
  code: string;
  path: string;
}

export async function MdxInner({ code, path }: MdxProps) {
  const Component = env.NEXT_PUBLIC_IS_DEV
    ? getMDXComponent(code)
    : (await import(`@/content-dist/${path}.js`)).default(
        React,
        ReactDOM,
        _jsx_runtime
      ).default;
  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}

export function Mdx({ code, path }: MdxProps) {
  return React.useMemo(
    () => <MdxInner code={code} path={path} />,
    [code, path]
  );
}
