import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import axios from 'axios';


const BarChart = () => {
    const [avion, setAvion] = useState([]);
    const [recette, setRecette] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/recette').then(res => {
            console.log(res.data);
            let av = [];
            let rec = [];
            res.data.map(dat => {
                av.push(dat.designation);
                rec.push(dat.recette);
            })
            setAvion(av);
            setRecette(rec);
            console.log(avion, recette);
        })
    }, [])

    const data = {
        labels: avion,
        datasets: [
            {
                label: "Recette  de chaque avions",
                data: recette,
                backgroundColor: 'cyan'
            },
        ],
    }
    return (
        <div>
            <Bar data={data} />
        </div>
    )
}

export default BarChart;