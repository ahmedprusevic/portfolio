import React, { Fragment } from 'react';
import loading from '../imgs/loading.gif';

const Loading = () => (
    <Fragment>
        <img
        src={loading}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='Loading...'
        />
    </Fragment>
);

export default Loading;