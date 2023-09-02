import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface PropsCodeLine {
    code: string,
}
const CodeSyntaxHighlighter: FC<PropsCodeLine> = ({ code }) => {
    if (code !== '') {
       return ( <SyntaxHighlighter
        language="javascript"
        style={monoBlue}
        lineNumberStyle
      >
        {code}
      </SyntaxHighlighter>
       )
    }
    return null;
  }

  export default CodeSyntaxHighlighter