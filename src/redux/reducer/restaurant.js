import restaurants from "../../source";

export default (restaurant = restaurants, action) => {
    const {type} = action

    switch (type) {
        default:
            return restaurant
    }
}