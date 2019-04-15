import React from 'react';
import PropTypes from 'prop-types';
import Spell from './Spell';

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
    <ul>
      {spellList}
    </ul>
  );
}

SpellList.propTypes = {
  spells: PropTypes.array.isRequired
};
