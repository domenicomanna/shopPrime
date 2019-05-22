import React from 'react';
import Layout from './components/layout/Layout';
import ProductContainer from './containers/ProductContainer/ProductContainer'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function App() {
    return (
        <Layout>
            <ProductContainer/>
        </Layout>
    );
}

export default App;

