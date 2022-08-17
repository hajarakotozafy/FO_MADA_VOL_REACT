import { useEffect, useState } from 'react';
import FormInput from './FormInput';
import axios from 'axios';

const AvionForm = (props) => {
    const [av, setAv] = useState([]);
    const { recordForEdit } = props;
    const [values, setValues] = useState({
        villeDepart: "",
        villeArrivee: "",
        dateDepart: "",
        heureDepart: "",
        frais: 0,
        numAvion: 0
    })

    const updateOrAdd = (e) => {
        e.preventDefault();
        console.log("EDIT OR ADD")
        if (recordForEdit != null) {
            console.warn("recordForEdit", recordForEdit)
            axios.put(`http://localhost:3001/api/vol/${recordForEdit.numVol}`, {
                ...values
            }).then(res => {
                console.log("updateReturn", res);
                props.setOpenPopup(false)
            }).catch(err => {
                console.warn("updateError", err);
            })
        } else {
            axios.post(`http://localhost:3001/api/vol`, {
                ...values
            }).then(res => {
                props.setOpenPopup(false)
            }).catch(err => {
            })
        }
    }

    const inputs = [
        {
            id: 1,
            name: "villeDepart",
            type: "text",
            placeholder: "Ville de Départ",
            errorMessage: "Veuillez entrez une désignation valide",
            label: "Ville de Départ",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "villeArrivee",
            type: "text",
            placeholder: "Ville d'Arrivée",
            errorMessage: "Veuillez entrez un chiffre pértinent",
            label: "Ville d'Arrivée",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 3,
            name: "dateDepart",
            type: "date",
            placeholder: "Date de Départ",
            errorMessage: "Veuillez entrez un chiffre pértinent",
            label: "Date de Départ",
            required: true,
        },
        {
            id: 4,
            name: "heureDepart",
            type: "time",
            placeholder: "Heure de Départ",
            errorMessage: "Veuillez entrez un chiffre pértinent",
            label: "Heure de Départ",
            required: true,
        },
        {
            id: 5,
            name: "frais",
            type: "number",
            placeholder: "Frais",
            errorMessage: "Veuillez entrez un chiffre pértinent",
            label: "Frais",
            required: true,
        }
    ]

    useEffect(() => {
        if (recordForEdit != null) {
            setValues({
                ...recordForEdit
            })
        }
    }, [recordForEdit])
    const handleChangeInput = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get('http://localhost:3001/api/avion')
            .then(res => {
                setAv(res.data);
            })
    })
    return (
        <>
            <form onSubmit={e => updateOrAdd(e)}>
                {/* <h1>Nouvel Avion</h1> */}
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChangeInput} />

                ))}
                <select value={values["numAvion"]} onChange={(e) => setValues({ ...values, numAvion: e.target.value })}>
                    {av.map((avi) => (
                        <option value={avi.numAvion}>{avi.designation}</option>

                    ))}
                </select>
                <button type="submit" className="button">Enregistrer</button>
            </form>
        </>
    )
}

export default AvionForm;