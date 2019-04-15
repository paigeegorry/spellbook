import React from 'react';
import { connect } from 'react-redux';
import { getSpells } from '../selectors/spells';
import { fetchSpells } from '../actions/spells';
import PropTypes from 'prop-types';
import SpellList from '../components/spells/SpellList';

class Spells extends React.PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    spells: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <SpellList spells={this.props.spells} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  spells: getSpells(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchSpells());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spells);
