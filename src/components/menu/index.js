import React from "react";
import Product from "../product";
import {Col, Row} from "antd";
import Basket from "../basket";
import PropTypes from "prop-types"

function Menu({ menu }) {
    return (
        <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
            <Col align="left" lg={12} md={15} xs={24}>
                {menu.map(product => (
                    <Product product={product} key={product.id} />
                ))}
            </Col>
            <Col align="right" xs={0} md={7} lg={6} >
                <Basket />
            </Col>

        </Row>
    )
}

Menu.propTypes = {
    menu: PropTypes.array.isRequired
}

export default Menu