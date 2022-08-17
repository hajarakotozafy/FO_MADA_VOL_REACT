import { useEffect, useState } from 'react';
import FormInput from './FormInput';
import axios from 'axios';

const AvionForm = (props) => {
    const { recordForEdit } = props;
    const [values, setValues] = useState({
        design: "",
        nbPlaces: ""
    })

    const updateOrAdd = (e) => {
        console.log("EDIT OR ADD")
        if (recordForEdit != null) {
            console.warn("recordForEdit", recordForEdit)
            axios.put(`http://localhost:3001/api/avion/${recordForEdit.numAvion}`, {
                ...values
            }).then(res => {
                console.log("updateReturn", res);
                props.setOpenPopup(false)
            }).catch(err => {
                console.warn("updateError", err);
            })
        } else {
            axios.post(`http://localhost:3001/api/avion`, {
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
            name: "designation",
            type: "text",
            placeholder: "Désignation de l'avion",
            errorMessage: "Veuillez entrez une désignation valide",
            label: "Désignation",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "nbPlaces",
            type: "number",
            placeholder: "Nombre de places",
            errorMessage: "Veuillez entrez un chiffre pértinent",
            label: "Nombre de Places",
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
    return (
        <>
            <form>
                {/* <h1>Nouvel Avion</h1> */}
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChangeInput} />
                ))}
            </form>
            <button onClick={e => updateOrAdd(e)} className="button">Enregistrer</button>
        </>
    )
}

export default AvionForm;