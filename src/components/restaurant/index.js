import React from "react";
import Menu from "../menu";
import Reviews from "../reviews";
import ContentTab from "../content-tab";
import Banner from "../app/banner";
import styles from "./restaurant.module.css"

function Restaurant({ restaurant }) {
    const contentItem = [
        {
            tabTitle: "Menu",
            tabContent: <Menu menu={restaurant.menu} />
        },
        {
            tabTitle: "Reviews",
            tabContent: <Reviews reviews={restaurant.reviews} />
        }
    ]
    return (
        <>
            <Banner heading={restaurant.name} />
            <ContentTab items = {contentItem} tabPaneClassName={styles.tabPane} />
        </>
    )
}

export default Restaurant