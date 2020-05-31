import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pokedexService from '../../services/pokedexService'
import * as pokedexAction from '../../actions/pokedexAction'
import Home from '../../components/Home';

export class HomeContainer extends React.Component {

    fetchPokedex = () => {
        this.props.actions.fetchPokedex()
    };

    render() {
        return (
            <Home
                fetchPokedex={this.fetchPokedex}
            />
        )
    }
}

const mapStateToProps = state => ({
    pokedex: state.pokedexes.payload,
    pokedexErrors: state.pokedexes.errors,
    pokedexLoading: state.pokedexes.loading
})

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                pokedexService,
                pokedexAction
            ),
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);