import React from "react";
import {Button, Col, Row, Typography} from "antd";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons"
import {connect} from "react-redux";
import {decrement, increment} from "../../../redux/ac";
import styles from "./basket-item.module.css"

function BasketItem({ product, amount, increment, decrement}) {
    return (
        <Row type="flex" align="middle" className={styles.basketItem}>
            <Col span={12} align="left">
                <Typography.Text>{product.name}</Typography.Text>
            </Col>
            <Col span={12} align="right">
                <div className={styles.counter}>
                    <Button
                        icon={< PlusOutlined/>}
                        size="small"
                        onClick={() => increment(product.id)}
                        type="link"
                        className={styles.button}
                    />
                    <Typography.Text className={styles.count}>{amount}</Typography.Text>
                    <Button
                        icon={< MinusOutlined />}
                        size="small"
                        onClick={() => decrement(product.id)}
                        type="link"
                        className={styles.button}
                    />
                </div>
            </Col>
        </Row>
    )
}

export default connect(
    null, {increment, decrement}
)(BasketItem)