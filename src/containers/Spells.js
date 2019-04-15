import React from 'react';
import { connect } from 'react-redux';
import { getSpells, getSpellType } from '../selectors/spells';
import { fetchSpells, updateFilterValue } from '../actions/spells';
import PropTypes from 'prop-types';
import SpellList from '../components/spells/SpellList';
import SpellForm from '../components/spells/SpellForm';

class Spells extends React.PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    spells: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    spellType: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate() {
    
  }

  render() {
    const spells = this.props.spells.sort((a, b) => {
      return a.spell - b.spell;
    }).filter(spell => {
      return spell.type.includes(this.props.spellType);
    });
    
    return (
      <>
        <SpellForm handleChange={this.props.handleChange} />
        <SpellList spells={spells} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  spells: getSpells(state),
  spellType: getSpellType(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchSpells());
  },
  handleChange({ target }) {
    dispatch(updateFilterValue(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spells);
