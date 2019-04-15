import React from 'react';
import PropTypes from 'prop-types';

export default function SpellForm({ handleChange }) {
  const spellTypes = ['Charm', 'Curse', 'Enchantment', 'Hex', 'Jinx', 'Spell'];
  const spellTypeList = spellTypes.map((spellType, i) => {
    return (
      <option key={i} name={spellType} value={spellType}>{spellType}</option>
    );
  });
  return (
    <form>
      <select onChange={handleChange} defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled>Spell Type</option>
        <option value=''>All</option>
        {spellTypeList}
      </select>
    </form>
  );
}

SpellForm.propTypes = {
  handleChange: PropTypes.func.isRequired
};
