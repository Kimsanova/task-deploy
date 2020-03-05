import React from "react";
import cx from "classnames"
import {Col, Row, Tabs} from "antd";
import styles from "./content-tabs.module.css"
const {TabPane} = Tabs

function ContentTab({ items, tabPaneClassName }) {
    return (
        <Tabs
            defaultActiveKey="0"
            tabPosition="top"
            animated={false}
            className={styles.contentTabs}
        >
            {items.map((item, i) => (
                <TabPane
                tab={item.tabTitle}
                key={i}
                className={cx(styles.tabPane, tabPaneClassName)}
                >
                    <Row justify="center" type="flex">
                        <Col span={24}>
                            {item.tabContent}
                        </Col>
                    </Row>
                </TabPane>
                )
            )}
        </Tabs>
    )
}

export default ContentTab