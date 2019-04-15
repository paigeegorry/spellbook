import React from 'react';
import PropTypes from 'prop-types';

export default function SpellForm({ searchTerm, onChange }) {
  return (
    <form>
      <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} />
      <select>
        <option>Spell Type</option>
      </select>
    </form>
  );
}

SpellForm.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
