import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";

export default class ItemDetails extends Component {
    swapeService= new SwapiService();

    state={
        person:null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
        // console.log( this.state.person);
    }

    updatePerson(){
        const {personId}=this.props;
        if (!personId){
            return;
        }

        this.swapeService
            .getPerson(personId)
            .then((person)=>{
                this.setState({
                    person
                });
            });
    }

    render() {
        if (!this.state.person){
            return <span>Select a person from a list</span>
        }
        const {id, name, gender, eyeColor, birthYear}=this.state.person;

        return (
            <div className="container">
                <div className="person-details card">
                    <img className="person-image"
                         src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

                    <div className="card-body">
                        <h4>{name} {this.props.personId}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Gender</span>
                                <span>{gender}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Birth Year</span>
                                <span>{birthYear}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Eye Color</span>
                                <span>{eyeColor}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}