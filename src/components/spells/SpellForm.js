import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './SpellStyles';

export default function SpellForm({ handleChange }) {
  const spellTypes = ['Charm', 'Curse', 'Enchantment', 'Hex', 'Jinx', 'Spell'];
  const spellTypeList = spellTypes.map((spellType, i) => {
    return (
      <option key={i} name={spellType} value={spellType}>{spellType}</option>
    );
  });
  return (
    <Form>
      <label>Sort by Spell Type</label>
      <select onChange={handleChange} defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled>Spell Type</option>
        <option value=''>All</option>
        {spellTypeList}
      </select>
    </Form>
  );
}

SpellForm.propTypes = {
  handleChange: PropTypes.func.isRequired
};
