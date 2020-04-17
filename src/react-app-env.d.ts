/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.md';

declare module '*.graphql' {
    import {DocumentNode} from 'graphql'
    const Schema: DocumentNode

    export = Schema
}


declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        // readonly PUBLIC_URL: string;

        readonly PORT: number;
        readonly GALLERY_PATH: string;
        readonly CACHE_PATH: string;
        readonly WATERMARK_FILE: string;
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

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
}

declare module '*.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}


// node-imagemagick
declare module "imagemagick" {
    import child_process = require("child_process");

    interface _identify {
        (path: string, callback: (err: Error, features: Features) => void): child_process.ChildProcess;

        (path: any[], callback: (err: Error, result: string) => void): child_process.ChildProcess;

        path: string;
    }

    export var identify: _identify;

    export function readMetadata(path: string, callback: (err: Error, result: any) => void): child_process.ChildProcess;

    interface _convert {
        (args: any, callback: (err, result) => void): child_process.ChildProcess;

        (args: any, timeout: number, callback: (err, result) => void): child_process.ChildProcess;

        path: string;
    }

    export var gonvert: _convert;

    export function resize(options: Options, callback: (err, result) => void): child_process.ChildProcess;

    export function crop(options: Options, callback: (err, result) => void): child_process.ChildProcess;

    export function resizeArgs(options: Options): ResizeArgs;

    export interface Features {
        format?: string;
        width?: string;
        height?: string;
        depth?: string;
    }

    export interface Options {
        srcPath?: string;//: null,
        srcData?: string;//: null,
        srcFormat?: string;//: null,
        dstPath?: string;//: null,
        quality?: number;//: 0.8,
        format?: string;//: 'jpg',
        progressive?: boolean;//: false,
        colorspace?;//: null,
        width?: number;//: 0,
        height?: number;//: 0,
        strip?: boolean;//: true,
        filter?: string;//: 'Lagrange',
        sharpening?: number;//: 0.2,
        customArgs?: any[];//: [],
        timeout?: number;//: 0
    }

    export interface ResizeArgs {
        opt: Options;
        args: string[];
    }
}
