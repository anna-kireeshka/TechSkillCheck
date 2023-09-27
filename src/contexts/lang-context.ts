import { createContext } from 'react';
export const LangContext = createContext({
  lang: '',
  setLang: (lang: string) => {},
});