import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout';

const pageThree = () => {
    return (
        <Layout>
            <h1>Selamat Datang di Page 3</h1>
            <Link to="/page-2">Go back to page 2</Link>
        </Layout>
    )
}

export default pageThree