import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error/error-indicator";
import SwapiService from "../../services/swapi-service";

const Row =({left , right})=>{
    return(
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
};

class PeoplePage extends Component {
    swapiService= new SwapiService();
    state={
        selectedPerson : null,
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError : true
        })
    }

    onPersonSelected=(id)=>{
        this.setState({
            selectedPerson: id
        })
    };

    render() {

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender, birthYear})=>`${name}, (${gender} , ${birthYear})`}/>
        );
        const personDetails= (
            <ItemDetails personId={this.state.selectedPerson}/>
        );

        if (this.state.hasError){
            return <ErrorIndicator/>;
        }

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}

PeoplePage.propTypes = {};

export default PeoplePage;