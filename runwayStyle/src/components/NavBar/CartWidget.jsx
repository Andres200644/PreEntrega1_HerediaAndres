import React from 'react';
import './styles.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <i className="bi bi-cart"></i> {/* Asegúrate de que tienes Bootstrap Icons o reemplaza este ícono con uno disponible */}
            <span className="badge">3</span> {/* Número hardcodeado */}
        </div>
    );
}

export default CartWidget;