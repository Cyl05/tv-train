import React from 'react';
import { useParams } from 'react-router-dom';

const DynamicPage = () => {
    const { name } = useParams();

    return (
        <>
            <h1>Hello, {name}!</h1>
        </>
    )
}

export default DynamicPage;