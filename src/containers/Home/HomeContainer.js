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

    fetchPokedexDetail = url => {
        this.props.actions.fetchPokedexDetail(url)
    };

    pokedexList = data => {
        console.log('data :>> ', data);
        this.props.actions.pokedexArrayStoreRequest(data)
    }

    render() {
        return (
            <Home
                fetchPokedex={this.fetchPokedex}
                fetchPokedexDetail={this.fetchPokedexDetail}
                pokedexList={this.pokedexList}
                {...this.props}
            />
        )
    }
}

const mapStateToProps = state => ({
    pokedexes: state.pokedexes.payload,
    pokedexErrors: state.pokedexes.errors,
    pokedexLoading: state.pokedexes.loading, 
    pokedexDetails: state.pokedexDetails.payload,
    pokedexDetailErrors: state.pokedexDetails.errors,
    pokedexDetailLoading: state.pokedexDetails.loading,
    pokedexArray: state.pokedexArray.payload
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