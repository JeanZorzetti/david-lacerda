"use client";

import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useMDXComponents } from "@/mdx-components";

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const components = useMDXComponents({});
  // velite compiles MDX body to a function using arguments[0] = {Fragment, jsx, jsxs}
  // eslint-disable-next-line no-new-func
  const fn = new Function(code);
  const { default: Component } = fn.call(null, { Fragment, jsx, jsxs }) as {
    default: React.ComponentType<{ components?: typeof components }>;
  };
  return <Component components={components} />;
}
