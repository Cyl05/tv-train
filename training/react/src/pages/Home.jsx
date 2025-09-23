import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link to="/comps-and-props">Chapter 5: Components and Props</Link><br />
            <Link to="/handling-events">Chapter 6: Handling Events</Link><br />
            <Link to="/forms">Chapter 7: Forms</Link><br />
            <Link to="/router/talview">Chapter 8: React Router</Link><br />
            <Link to="/error-boundary">Error Boundaries</Link>
        </>
    )
}

export default Home;