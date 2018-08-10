// Lobster theme.js
import theme from 'mdx-deck/themes'
import { future } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import dark from 'react-syntax-highlighter/styles/prism/dark'
const monospace = 'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'
const lobster = 'Lobster, Georgia, serif'

export default {
  ...theme,
  font: lobster,
  monospace,
  prism: {
    style: okaidia
  },
  // fontSizes: [ 16, 24, 32, 48, 64, 96, 128 ],
  colors: {
    text: '#000',
    background: 'transparent',
    link: '#0366D6',
    pre: '#fff',
    preBackground: '#000',
    code: '#111',
    codeBackground: '#E1E4E8',
  },
  css: {
    ...theme.css,
    textAlign: 'left',
    '& .Slide': {
      width: '100%',
      alignItems: 'flex-start'
    }
  },
  heading: {
    fontFamily: lobster,
    fontWeight: 400
  },
  p: {
    fontFamily: monospace,
    fontSize: '1em'
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  // blockquote: {
  //   fontSize:
  // }
}
