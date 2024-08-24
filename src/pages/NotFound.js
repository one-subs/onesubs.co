import React from 'react';
import { ReactComponent as NotFoundImg } from '../styles/images/not_found.svg';

const NotFound = () => {
    return (
        <div className="description">
            <div className="page_width">
                <h1 style={{ marginTop: '150px', fontSize: '30px' }}>Page not found, click the OneSubs logo to return to the main page.</h1>
                <NotFoundImg style={{ marginTop: '50px', maxWidth: '350px', maxHeight: '310px', marginBottom: '200px' }}/>
            </div>
        </div>
    );
};

export default NotFound;