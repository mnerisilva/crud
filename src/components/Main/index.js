import React from 'react'

import List from '../List/index'
import FormProducts from '../Form/index';


const Main = () => {
    return (
        <div className="row">
            <FormProducts />
            <List />
        </div>
    );
}

export default Main