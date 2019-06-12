import React from 'react';

import User from '../../components/User';

const authIndexPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <User name="Ivan" age={24} />
    </div>
);

export default authIndexPage;