import React from "react";
import ImgBanner from "./hero-banner.jpg"
import styles from "./banner.module.css"
import {Typography} from "antd";

function Banner({ img = ImgBanner, heading, description, children }) {
    return(
        <div className={styles.banner}>
            <img src={img} className={styles.bannerImg} alt="banner"/>
            <div className={styles.bannerCaption}>
                <Typography.Title level={2} className={styles.heading}>
                    {heading}
                </Typography.Title>
                <Typography.Text className={styles.description}>
                    {description}
                </Typography.Text>
                <div className={styles.colorWhite}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Banner