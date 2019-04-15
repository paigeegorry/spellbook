import React from 'react';
import PropTypes from 'prop-types';

export default function Spell({ spell }) {
  return (
    <li key={spell._id}>
      <h3>{spell.spell}</h3>
      <p>{spell.type}</p>
      <p>{spell.effect}</p>
    </li>
  );
}

Spell.propTypes = {
  spell: PropTypes.object.isRequired
};
