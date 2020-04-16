/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.md';

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode

  export = Schema
}


declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
      SVGSVGElement
      > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
