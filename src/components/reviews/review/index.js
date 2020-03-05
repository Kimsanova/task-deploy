import React from "react";
import {Card, Col, Rate, Row, Typography} from "antd";
import styles from "./review.module.css"
import PropTypes from "prop-types"

function Review({ user, text, rating }) {
    return (
        <Card className={styles.review}>
            <Row>
                <Col span={12} align="left">
                    <Typography.Title level={4} className={styles.name}>
                        {user}
                    </Typography.Title>
                    <Typography.Paragraph className={styles.comment}>
                        {text}
                    </Typography.Paragraph>
                </Col>
                <Col span={12} align="right" className={styles.rateColumn}>
                    <Rate  value={rating} />
                </Col>
            </Row>
        </Card>
    )
}

Review.defaultProps = {
    user: "Anonymous"
}

Review.propTypes = {
        user: PropTypes.string,
        text: PropTypes.string,
        rating: PropTypes.number
}

export default Review