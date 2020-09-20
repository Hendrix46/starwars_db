import React, {Component} from 'react';
import Header from "../header/header";
import RandomPlanet from "../random planet/random planet";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";

class App extends Component {
    swapiService = new SwapiService();
    state={
        selectedPerson: 2
    };

    render() {
        return (
            <div className="container">
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanet}
                            renderItem={(item)=>item.name}/>
                    </div>
                    <div className="col-md-6">
                        <ItemDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarShips}
                            renderItem={(item)=>item.name}/>
                    </div>
                    <div className="col-md-6">
                        <ItemDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {};

export default App;