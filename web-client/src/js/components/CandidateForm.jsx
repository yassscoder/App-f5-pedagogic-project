import * as React from "react";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import {Formik, Field, Form} from "formik";

export const CandidateForm = (props) => {
    const [redirect, setRedirect] = useState (false);

    if (redirect){
        return <Redirect to="/candidate-list"/>;

    }

    return <div className="container__form">
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    age: '',
                    mail: '',
                    userFree: '',
                    numCompleted: ''

                }}
                onSubmit={
                    (values )=>
                        props.onSubmit(JSON.stringify(values))
                            .then(_ => setRedirect(true))
                }
            >
                {({values}) => <Form>
                    <label htmlFor="name">Nombre</label>
                    <Field id="name" name="name"/>
                    <label htmlFor="lastName">Apellido</label>
                    <Field id="lastName" name="lastName"/>
                    <label htmlFor="age">Edad</label>
                    <Field id="age" name="age"/>
                    <label htmlFor="mail">Correo electronico</label>
                    <Field id="mail" name="mail"/>
                    <label htmlFor="userFree">Usuario FreeCodeCamp</label>
                    <Field id="userFree" name="userFree"/>
                    <button type={"submit"}>Guardar datos</button>

                </Form>}
            </Formik>

    </div>


};