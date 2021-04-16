import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400;500&display=swap');

*{
    margin: 0;
    padding: 0;
    outlinne: 0;
    box-sizing: border-box
}

html, body, #root{
    height: 100%;
}

.mb-20{
    margin-bottom: 20px;
  }

.mb-5{
  margin-bottom: 5px;
}

.mb-10{
  margin-bottom: 10px;
}

.mb-15{
  margin-bottom: 15px;
}

.mt-5{
  margin-top: 5px;
}

body{
    font: 14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
}

button{
    outline: none;
    border: none;
}

ul{
    list-style: none
}
`;