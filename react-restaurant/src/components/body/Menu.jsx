import React, { Component } from 'react'
import DISHES from '../../data/dishes.js'
import DishDetail from './DishDetail.jsx'
import MenuItem from './MenuItem.jsx'

export class Menu extends Component {
//STATE AREA
    state = {
        dishes: DISHES,
        selectedDish: null
    }
// =================================================================
//FUNCTION AREA
    onDishSelect = dish => {
        this.setState({
            selectedDish: dish
        })
    }  

//RENDER AREA
    render() {

        const menu = this.state.dishes.map( item => {
            return (
                <MenuItem dish = {item} 
                          key = {item.id}
                          dishSelect = {this.onDishSelect}/>
            )
        })

        let dishDetail = null;
        if(this.state.selectedDish != null){
            dishDetail = <DishDetail dish={this.state.selectedDish}/>
        }

        return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {menu}
                </div>
                <div className="col-6">
                    {dishDetail}
                </div>
            </div>
        </div>
        )
  }
}

export default Menu