import React, {Component} from 'react';
import Burger from '../components/Burger/Burger.js';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal.js';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary.js'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.0
}

class BugerBuider extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing:false

    }

updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients)
            .map(igKey=>{
              return ingredients[igKey]
          }
        ).reduce((sum, el)=>{return sum+el},0);
        this.setState({purchasable: sum > 0 })
}



    addIngredientHander = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount =oldCount + 1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+ priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }


    removeIngredientHander = (type) =>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount =oldCount - 1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice- priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHander = () =>{
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () =>{
        alert('continue!!!');
    }

    render() {
        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0 // The type of disabledInfo changed from an number (integer) to boolean!!!
        }

        return (
            <>
            <Modal show={this.state.purchasing}
                        modalClosed={this.purchaseCancelHandler}
            >
                <OrderSummary
                    purchaseContinued={this.purchaseContinueHandler}
                    purchaseCanceled={this.purchaseCancelHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                />
            </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHander}
                    ingredientRemoved={this.removeIngredientHander}
                    disabled={disabledInfo}
                    price={this.state.totalPrice.toFixed(2)}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHander}
                />

            </>
        );

    }

}

export default BugerBuider;