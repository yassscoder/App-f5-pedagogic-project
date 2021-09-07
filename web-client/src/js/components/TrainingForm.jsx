import * as React from "react";
import {useState} from "react";
import {Formik, Field, Form} from "formik";
import {Redirect} from "react-router-dom";


export const TrainingForm = (props) => {
    const [redirect, setRedirect] = useState (false);

    if (redirect){
        return <Redirect to="/training-list"/>;

    }

    return <div className="container__form">
        <div className="training__form">
            <Formik
                initialValues={{
                    city: '',
                    promoName: '',
                    duration: ''

                }}
                onSubmit={
                    (values )=>
                        props.onSubmit(JSON.stringify(values))
                            .then(_ => setRedirect(true))
                }
            >
                {({values}) => <Form>
                    <label htmlFor="city">Ciudad</label>
                    <Field id="city" name="city"/>
                    <label htmlFor="promoName">Nombre promo</label>
                    <Field id="promoName" name="promoName"/>
                    <label htmlFor="duration">Duración(h)</label>
                    <Field id="duration" name="duration"/>
                    <button type={"submit"}>Guardar promoción</button>

                </Form>}
            </Formik>

        </div>
    </div>;


};
