import styled, { injectGlobal } from 'styled-components'
import { NavLink } from 'react-router-dom';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto');
@font-face {
  font-family: 'Roboto', sans-serif;
}

* {
  font-family: 'Roboto', sans-serif;
}

html, body {
  margin: 0;
  background-color: #fff;
}
`;