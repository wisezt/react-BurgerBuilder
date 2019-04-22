import React from 'react';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {

        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>

    });


    return (
        <>
            <h3> Your Order</h3>
            <p>A delicious burger:</p>
            <ul>
                {ingredientSummary}
            </ul>

            <button>
                CANCEL
            </button>
            <botton>
                CONTINUE
            </botton>


        </>

    );


}

export default orderSummary;