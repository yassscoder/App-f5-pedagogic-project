import * as React from "react";
import {useState} from "react";
import {Redirect} from "react-router";
import {Formik, Field, Form} from "formik";


export const CandidatesForm = (props) => {
    const [redirect, setRedirect] = useState (false);

    if (redirect){
        return <Redirect to="/Candidate-added"/>;

    }

    return <div className="container__form">
        <div className="candidates__form">
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    city: '',
                    phone: '',
                    email: ''

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
                    <label htmlFor="city">Ciudad</label>
                    <Field id="city" name="city"/>
                    <label htmlFor="phone">Telefono</label>
                    <Field id="phone" name="phone"/>
                    <label htmlFor="email">Correo electronico</label>
                    <Field id="email" name="email"/>
                    <button type={"submit"}>Guardar candidates</button>

                </Form>}
            </Formik>

        </div>
    </div>


};