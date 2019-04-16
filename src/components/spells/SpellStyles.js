import styled from 'styled-components';

export const Header = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Merriweather');
  font-family: 'Merriweather', serif;
  h1 {
    color: white;
    font-size: 5em;
    margin-left: 30px;
  }
`;

export const Form = styled.form`
  @import url('https://fonts.googleapis.com/css?family=Merriweather');
  label {
    margin-left: 30px;
    margin-bottom: 10px;
    display: block;
    font-family: 'Merriweather', serif;
    color: white;
  }
  select {
    font-family: 'Merriweather', serif;
    font-size: 1em;
    margin-left: 30px;

  }
`;

export const List = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Merriweather');
  ul {
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    text-align: center;
    
    li {
      list-style: none;
      font-family: 'Merriweather', serif;
      margin: 10px;
      border: 1px solid black;
      box-shadow: 4px 4px gray;
      background: white;
      color: #212121;;
      p {
        text-transform: lowercase;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
  
`;

