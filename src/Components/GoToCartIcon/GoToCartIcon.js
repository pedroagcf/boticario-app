import React, { useState, useEffect } from 'react'

import cartIcon from '../../assets/images/cart.svg'
import productStore from "../../stores/productStore";

const GoToCartIcon = () => {
    const [valorProd, setValorProd] = useState(productStore.getValorProdutos())

    useEffect(() => {
        productStore.addChangeListener(onchange);
    }, [valorProd])

    function onchange() {
        setValorProd(productStore.getValorProdutos())
    }

    return (
        <div className="header__goToCart">
            <img src={cartIcon} className="header__goToCart__icon" />
            <span className="header__goToCart__price">{valorProd ? `R$ ${valorProd.toFixed(2)}` : ''}</span>
        </div>
    )
}

export default GoToCartIcon;