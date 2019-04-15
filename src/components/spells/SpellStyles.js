import styled from 'styled-components';



export const List = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Habibi');
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    
    li {
      list-style: none;
      font-family: 'Habibi', serif;
      margin: 10px;
      background-image: linear-gradient(gray, lightgray);
      h3 {
        text-transform: uppercase;
      } 
      p {
        text-transform: lowercase;
      }
    }
  }
  
`;

