import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Home.css';

const Home = () => {
    const [avionList, setAvionList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/avion/").then(response => setAvionList(response.data))
    }, [])
    return (
        <>
            <h1>Avion</h1>
            <table>
                <thead>
                    <tr>
                        <th>Désignation</th>
                        <th>Nombre de place</th>
                        <th>Numero de vol</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {avionList.map(avion => {
                        return (
                            <tr key={avion.numAvion}>
                                <td>designation: {avion.designation}{""}</td>
                                <td>nombre de place: {avion.nbPlaces}{""}</td>
                                <td>numero de vol: {avion.numVol}</td>
                                <td>
                                    <button>Modifier</button>
                                    <button>Supprimer</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Home