/// <reference types="react-scripts" />
declare module "react-syntax-highlighter/dist/esm/styles/hljs";
declare module "react-syntax-highlighter";
declare module "react-syntax-highlighter/dist/esm/styles/prism";
declare module "dompurify";
declare module "react-google-recaptcha";
declare module "@types/react-google-recaptcha";
declare module '*.svg';
declare module '*.scss' {
    const content: string;
    export default content;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}