import { useEffect, useState } from 'react';
import FormInput from '../Component/FormInput';
import axios from 'axios';
import Styled from 'styled-components';

const AvionForm = (props) => {
    const { recordForEdit } = props;
    const [values, setValues] = useState({
        username: "",
        password: ""
    })



    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Nom d'utilisateur",
            errorMessage: "Veullez entrez un nom valide",
            label: "Nom d'utilisateur",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Mot de passe",
            errorMessage: "Veuillez entrez un mot de passe valide",
            label: "Mot de passe",
            required: true,
        }
    ];


    const login = e => {
        e.prevantDefault();
        axios.post('http://localhost:3001/api/login', {
            ...values
        })
            .then(res => {
                console.log('login', { res });
                localStorage.setItem('user', JSON.stringify(res.data));
                window.location.href = "/Avion";
            })
            .catch(err => {
                console.log("erreur", err.response);
            })
    }

    useEffect(() => {

    }, [])

    const handleChangeInput = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <ContLog>
            <form>
                <h1>LOGIN</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChangeInput} />
                ))}
            </form>
            <button onClick={e => login(e)} className="button">Se Connecter</button>
        </ContLog>
    )
}

export default AvionForm;

const ContLog = Styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    form{
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        button{
            width: 300px;
        }
    }
`