import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ReservationForm = () => {
    const history = useHistory();

    const [focused, setFocused] = useState(false);
    const [vol, setVol] = useState([]);
    const [places, setPlaces] = useState([]);

    const [numVol, setNumVol] = useState(0);
    const [numPlaceRes, setNumPlaceRes] = useState(0);
    const [nomVoyaguer, setNomVoyageur] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/api/vol')
            .then(res => {
                setVol(res.data);
            })

    }, [])

    useEffect(() => {
        if (numVol != 0) {
            axios.get(`http://localhost:3001/api/place/${numVol}`)
                .then(res => {
                    setPlaces(res.data);
                })
        }

    }, [numVol])
    const handleFocus = e => {
        setFocused(true);
    }

    const handleSubmitReservation = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/api/reservation/add`, {
            numVol,
            nomVoyageur: nomVoyaguer,
            numPlace: numPlaceRes
        })
            .then(res => {
                history.push('/Reservation');
            })
    }

    return (
        <>
            <form onSubmit={e => handleSubmitReservation(e)}>
                <FormInput>
                    <label>Vol</label>
                    {/* <input onBlur={handleFocus} focused={focused.toString()} pattern="^[A-Za-z0-9]{3,16}$" required /> */}
                    <select onChange={(e) => setNumVol(e.target.value)}>
                        {vol.map((fly) => (
                            <option value={fly.numVol}>{fly.villeDepart} - {fly.villeArrivee}</option>

                        ))}
                    </select>

                    {/* <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} /> */}
                    {/* <span className="span">{errorMessage}</span> */}
                    <span className="span">hehe</span>
                </FormInput>
                <FormInput>
                    <label>Numéro de la place</label>
                    <select value={numPlaceRes} onChange={(e) => setNumPlaceRes(e.target.value)}>
                        {
                            places && places.map((item) => (
                                <option value={item.numPlace}>{item.numPlace}</option>
                            ))}
                    </select>
                </FormInput>
                <FormInput>
                    <label>Nom du Voyageur</label>
                    <input onBlur={handleFocus} value={nomVoyaguer} onChange={e => setNomVoyageur(e.target.value)} focused={focused.toString()} pattern="^[A-Za-z0-9]{3,16}$" required />
                    <span className="span">Veillez entrer un nom valide</span>
                </FormInput>
                <button type="submit">Enregister la réservation</button>
            </form>
        </>
    )
}

export default ReservationForm;

const FormInput = Styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid blue; */
    // width: 300px;
    width: 100%;
    
    input {
        adding: 15px;
        margin: 10px 0px;
        border-radius: 5px;
        border: 1px solid gray;
        width: 100%;
    }
    
    select {
        adding: 15px;
        margin: 10px 0px;
        border-radius: 5px;
        border: 1px solid gray;
        width: 100%;
    }

    input: invalid[focused = "true"] {
        border: 1px solid red;
    }
    
    input: invalid[focused = "true"]~.span {
        display: block;
    }
    label {
        font-size: 20px;
        color: gray;
    }
    .span {
        font-size: 12px;
        padding: 3px;
        color: red;
        display: none;
    }
`

const Input = Styled.input`
    padding: 15px;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid gray;
`


