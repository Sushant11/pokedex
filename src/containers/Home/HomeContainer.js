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
    
    searchPokedex = (data) => {
        this.props.actions.searchPokedex(data)
    };

    fetchPokedexDetail = url => {
        this.props.actions.fetchPokedexDetail(url)
    };
    
    cleanPokedex = () => {
        this.props.actions.pokedexCleanRequest()
    }; 
    
    cleanPokedexDetail = () => {
        this.props.actions.pokedexDetailCleanRequest()
    }; 
    
    pokedexArrayStoreRequest = (data) => {
        this.props.actions.pokedexArrayStoreRequest(data)
    };



    render() {
        return (
            <Home
                fetchPokedex={this.fetchPokedex}
                searchPokedex={this.searchPokedex}
                cleanPokedex={this.cleanPokedex}
                cleanPokedexDetail={this.cleanPokedexDetail}
                fetchPokedexDetail={this.fetchPokedexDetail}
                pokedexArrayStoreRequest={this.pokedexArrayStoreRequest}
                {...this.props}
            />
        )
    }
}

const mapStateToProps = state => ({
    pokedexes: state.pokedexes.payload,
    pokedexErrors: state.pokedexes.errors,
    pokedexLoading: state.pokedexes.loading, 
    pokedexSearches: state.pokedexSearches.payload,
    pokedexSearchErrors: state.pokedexSearches.errors,
    pokedexSearchLoading: state.pokedexSearches.loading, 
    pokedexDetails: state.pokedexDetails.payload,
    pokedexDetailErrors: state.pokedexDetails.errors,
    pokedexDetailLoading: state.pokedexDetails.loading,
    pokedexArray: state.pokedexArray.payload,
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