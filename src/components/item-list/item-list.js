import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";

import './item-list.css';
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
    
    state={
        itemList: null
    };

    componentDidMount() {
        const {getData} = this.props;
            getData()
            .then((itemList)=>{
                this.setState({
                    itemList
            });
            });
    }

    renderItems= (arr)=>{
        return arr.map((item)=>{
            const {id}=item;
            const label= this.props.renderItem(item);
            return(
                <li className="list-group-item"
                    key={id}
                    onClick={()=>this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    };

    render() {
        const { itemList } = this.state;
        if (!itemList){
            return <Spinner/>;
        }

        const items = this.renderItems(itemList);
        return (
           <div className="container">
               <ul className="item-list list-group mb-5">
                   {items}
               </ul>
           </div>
        );
    }
}