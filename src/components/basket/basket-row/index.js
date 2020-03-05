import React from "react";
import {Col, Row, Typography} from "antd";
import styles from "./basket-row.module.css"

function BasketRow({ align = "top", leftContent, rightContent}) {
    return (
        <Row align={align} type="flex" className={styles.basketRow}>
            <Col align="left" span={12}>
                <Typography.Text>{leftContent}</Typography.Text>
            </Col>
            <Col span={12} align="right">
                <Typography.Text>{rightContent}</Typography.Text>
            </Col>
        </Row>
    )
}

export default BasketRow