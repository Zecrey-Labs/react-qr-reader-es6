// Type definitions for react-qr-reader 2.1
// Project: https://github.com/JodusNodus/react-qr-reader
// Definitions by: David Kevork <https://github.com/davidkevork>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
declare module "react-qr-reader-es6";
declare namespace QrReader {
  interface props {
    onScan: (data: string | null) => void;
    onError: (err: any) => void;
    onLoad?: (() => void) | undefined;
    onImageLoad?:
      | ((event: React.SyntheticEvent<HTMLImageElement>) => void)
      | undefined;
    delay?: number | false | undefined;
    facingMode?: "user" | "environment" | undefined;
    legacyMode?: boolean | undefined;
    resolution?: number | undefined;
    showDefaultViewFinder?: boolean | undefined;
    style?: any;
    className?: string | undefined;
    ViewFinder?: (props: any) => React.ReactElement<any, any> | null;
  }
}

export as namespace QrReader;

declare class QrReader extends React.Component<QrReader.props> {
  openImageDialog: () => void;
}

export = QrReader;
