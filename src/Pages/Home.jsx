import React, { useEffect } from 'react';
import BarChart from '../Component/BarChart';

const Home = () => {
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            window.location.href = "/login";
        }
    })
    return (
        <div><BarChart /></div>
    )
}

export default Home