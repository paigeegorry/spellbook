import React from 'react';
import PropTypes from 'prop-types';
import Spell from './Spell';
import { List } from './SpellStyles';

export default function SpellList({ spells }) {
  const spellList = spells.map(spell => {
    return (
      <Spell 
        key={spell._id} 
        spell={spell} 
      />
    );
  });

  return (
    <List>
      <ul>
        {spellList}
      </ul>
    </List>
  );
}

SpellList.propTypes = {
  spells: PropTypes.array.isRequired
};
