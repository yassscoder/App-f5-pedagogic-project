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
                    <label htmlFor="age">Age</label>
                    <Field id="age" name="age"/>
                    <label htmlFor="phone">Telefono</label>
                    <Field id="phone" name="phone"/>
                    <label htmlFor="email">Correo electronico</label>
                    <Field id="email" name="email"/>
                    <button type={"submit"}>Guardar datos</button>

                </Form>}
            </Formik>

    </div>


};