import React from "react";
import cx from "classnames"
import {Typography} from "antd";
import BasketItem from "./basket-item";
import BasketRow from "./basket-row";
import Button from "antd/es/button";
import {connect} from "react-redux";
import styles from "./basket.module.css"

function Basket({ title = "Basket", total, className, orderProducts}) {
    return (
        <div className={cx(styles.basket, className)}>
            <Typography.Title level={4} className={styles.title}>
                {title}
            </Typography.Title>
            { orderProducts.map(({ product, amount }) => (
                <BasketItem product={product} amount={amount} key={product.id} />
            ))}
            <hr/>

            <BasketRow leftContent={"Sub-Total"} rightContent={`${total} сом`} />
            <BasketRow leftContent={"Delivery costs"} rightContent={"FREE"} />
            <BasketRow leftContent={"Total"} rightContent={`${total} сом`} />
            <Button
                size="large"
                type="primary"
                block>
                order
            </Button>
        </div>
    )
}

export default connect(state => {
    const allProducts = state.restaurants.flatMap(restaurant => restaurant.menu)

    const orderProducts = Object.keys(state.order)
        .filter(productId => state.order[productId] > 0)
        .map(productId => allProducts.find(product => product.id === productId))
        .map(product => ({
            product,
            amount: state.order[product.id]
        }))

    const total = orderProducts.reduce(
        (acc, {product, amount}) => acc + product.price * amount, 0
    )
    return {
        total,
        orderProducts
    }
})(Basket)