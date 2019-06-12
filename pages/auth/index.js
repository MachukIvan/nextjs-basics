import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page</h1>
        <User name="Ivan" age={24} />
    </div>
);

authIndexPage.getInitialProps = context => {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: "Super App (Auth)" });
        }, 1000);
    });
    return promise;
};

export default authIndexPage;
