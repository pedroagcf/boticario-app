import React, { useState, useEffect } from 'react'

import productStore from "../../stores/productStore";
import productActions from "../../actions/productActions";

const GoToCartIcon = () => {
    const [valorProd, setValorProd] = useState(productStore.getValorProdutos())

    useEffect(() => {
        productStore.addChangeListener(onchange);

        // productActions.sendValueProd()
    })

    function onchange() {
        setValorProd(productStore.getValorProdutos())
    }

    return <span className="header__goToCart">{valorProd}</span>
}

export default GoToCartIcon;