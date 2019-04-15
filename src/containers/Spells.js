import React from 'react';
import { getQuoteInfo } from '../services/potterApi';

export default class Spells extends React.PureComponent {
  componentDidMount() {
    getQuoteInfo().then(console.log);
  }
  render() {
    return (
      <p>Spells</p>
    );
  }
}
