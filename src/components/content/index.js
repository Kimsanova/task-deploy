import React from "react";
import Restaurant from "../restaurant";
import ContentTab from "../content-tab";
import {connect} from "react-redux";

function Content({ restaurants }) {
    const items = restaurants.map(restaurant => ({
        tabTitle: restaurant.name,
        tabContent: <Restaurant restaurant={restaurant} />
    }))

    return  <ContentTab items={items} />
}

export default connect(state => ({
    restaurants: state.restaurants
}))(Content)