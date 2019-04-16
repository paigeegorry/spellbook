import React from 'react';
import Spells from '../../containers/Spells';
import { Header } from '../spells/SpellStyles';

export default function App() {
  return (
    <>
      <Header>
        <h1>Spellbook</h1>
      </Header>
      <Spells />
    </>
  );
}
