import React from "react";
import {Button, Card, Col, Row, Typography} from "antd";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons"
import {decrement, increment} from "../../redux/ac";
import {connect} from "react-redux";
import styles from "./product.module.css"
import PropTypes from "prop-types"

function Product({ product, amount, handleIncrement, handleDecrement }) {
    return (
        <Card className={styles.productDetailedOrderCard}>
            <Row type="flex" justify="space-between">
                <Col align="left" span={12}>
                    <Typography.Title level={4} className={styles.title}>
                        {product.name}
                    </Typography.Title>
                    <Typography.Paragraph className={styles.description}>
                        {product.ingredients.join(", ")}
                    </Typography.Paragraph>
                    <div className={styles.price}>{product.price} сом</div>
                </Col>
                <Col align="right" span={12}>
                    <div className={styles.counter}>
                        <div className={styles.count}>
                            {amount}
                        </div>
                        <Button.Group>
                            <Button
                                className={styles.button}
                                size="small"
                                icon={<PlusOutlined />}
                                onClick={() => handleIncrement(product.id)}
                            />
                            <Button
                                className={styles.button}
                                size="small"
                                icon={<MinusOutlined />}
                                onClick={() => handleDecrement(product.id)}
                            />
                        </Button.Group>
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

const mapStateToProps = (storeState, ownProps) => ({
    amount: storeState.order[ownProps.product.id] || 0
})

const mapDispatchToProps = {
    handleIncrement: increment,
    handleDecrement: decrement
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        ingredients: PropTypes.array.isRequired
    }).isRequired,
    //from redux
    amount: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Product)