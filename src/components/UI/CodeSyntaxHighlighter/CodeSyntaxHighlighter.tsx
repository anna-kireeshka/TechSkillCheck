import React, { FC, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ThemeContext } from '../../../contexts/theme-context';

interface PropsCodeLine {
    code: string,
}
const CodeSyntaxHighlighter: FC<PropsCodeLine> = ({ code }) => {
    const theme = useContext(ThemeContext);

    if (code !== '') {
       return ( <SyntaxHighlighter
        language="javascript"
        style={theme.theme === 'light' ? monoBlue : atomOneDark}
        lineNumberStyle
      >
        {code}
      </SyntaxHighlighter>
       )
    }
    return null;
  }

  export default CodeSyntaxHighlighter