import * as React from "react";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import {Formik, Field, Form} from "formik";
import {TrainingSelect} from "./TrainingSelect";


function validateNameOrLastName(value) {
    let error;

    if (!value) {

        error = 'Campo obligatorio';

    } else if (!/^[a-zA-z]{2,64}$/i.test(value)) {

        error = 'El campo ha de contener al menos 2 letras';

    }

    return error;

}
function validateAge(value) {
    let error;

    if (!value) {

        error = 'Campo obligatorio';

    } else if (!/^(?:1[01][0-9]|100|1[6-9]|[2-9][0-9])$/i.test(value)) {

        error = 'La edad debe estar comprendida entre 16-100';

    }

    return error;

}
function validateMail(value) {
    let error;

    if (!value) {

        error = 'Campo obligatorio';

    } else if (!/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}$/i.test(value)) {

        error = 'Ha de ser una dirección válida';

    }

    return error;

}
function validateUser(value) {
    let error;

    if (!value) {

        error = 'Campo obligatorio';

    } else if (!/^[\w\-]{3,64}$/i.test(value)) {

        error = 'Caracteres permitidos letras de la A-Z, números del 1-9 y el signo -';

    }

    return error;

}



export const CandidateForm = (props) => {
    const [redirect, setRedirect] = useState (false);

    if (redirect){
        return <Redirect to="/candidate-list"/>;

    }

    return <div className="container__form">
            <Formik
                initialValues={{
                    training: '',
                    name: '',
                    lastName: '',
                    age: '',
                    mail: '',
                    userFree: ''
                }}
                onSubmit={
                    (values )=>
                        props.onSubmit(JSON.stringify(values))
                            .then(_ => setRedirect(true))
                }
            >
                {({errors, touched}) => <Form>
                    <label htmlFor="training">Formación</label>
                    <TrainingSelect />
                    <label htmlFor="name">Nombre</label>
                    <Field id="name" name="name" validate={validateNameOrLastName}/>
                    {errors.name && touched.name && <div>{errors.name}</div>}
                    <label htmlFor="lastName">Apellido</label>
                    <Field id="lastName" name="lastName" validate={validateNameOrLastName}/>
                    {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
                    <label htmlFor="age">Edad</label>
                    <Field id="age" name="age" validate={validateAge}/>
                    {errors.age && touched.age && <div>{errors.age}</div>}
                    <label htmlFor="mail">Dirección e-mail </label>
                    <Field id="mail" name="mail" validate={validateMail}/>
                    {errors.mail && touched.mail && <div>{errors.mail}</div>}
                    <label htmlFor="userFree"> Nombre usuario Free Code Camp</label>
                    <Field id="userFree" name="userFree" validate={validateUser}/>
                    {errors.userFree}
                    <button type={"submit"}>Guardar datos</button>
                </Form>}
            </Formik>
    </div>
};