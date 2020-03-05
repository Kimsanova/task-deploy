import React from "react";
import {Layout} from "antd";
import Content from "../content";
import Header from "./header";

function App() {
    return (
        <Layout>
            <Header/>
            <main role="main">
                <Content />
            </main>
        </Layout>
    )
}

export default App