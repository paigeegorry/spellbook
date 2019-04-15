import React from 'react';
import { connect } from 'react-redux';
import { getSpells, getSearchTerm } from '../selectors/spells';
import { fetchSpells, updateSearchTerm } from '../actions/spells';
import PropTypes from 'prop-types';
import SpellList from '../components/spells/SpellList';
import SpellForm from '../components/spells/SpellForm';

class Spells extends React.PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    spells: PropTypes.array.isRequired,
    searchTerm: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const spells = this.props.spells.sort((a, b) => {
      return a.spell - b.spell;
    });
    
    return (
      <>
        <SpellForm searchTerm={this.props.searchTerm} onChange={this.props.onChange} />
        <SpellList spells={spells} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  spells: getSpells(state),
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchSpells());
  },
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spells);
