import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

html {
-webkit-box-sizing: border-box;
box-sizing: border-box;
}

*, *:before, *:after {
-webkit-box-sizing: inherit;
box-sizing: inherit;
}

body {
  background-color: #303030;
  padding: 0;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-smoothing: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;