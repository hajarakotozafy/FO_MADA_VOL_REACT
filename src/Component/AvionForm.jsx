import { useEffect, useState } from 'react';
import FormInput from './FormInput';

const AvionForm = () => {
    const [values, setValues] = useState({
        design: "",
        nbPlaces: ""
    })

    const inputs = [
        {
            id: 1,
            name: "design",
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

    const handleChangeInput = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    console.log(values);
    return (
        <>
            <form>
                {/* <h1>Nouvel Avion</h1> */}
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChangeInput} />
                ))}
                <button className="button">Enregistrer</button>
            </form>
        </>
    )
}

export default AvionForm;