import * as React from "react";
import {useState} from "react";
import {Formik, Field, Form} from "formik";
import {Redirect} from "react-router-dom";
import "../../scss/TrainingForm.scss";


function validateCity(value) {
    let error;

    if (!value) {

        error = 'Campo obligatorio';

    } else if (!/^[A-Za-zäÄëËïÏöÖüÜáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ.-\u00f1\u00d1]{3,64}$/i.test(value)) {

        error = 'La ciudad debe contener al menos 3 caracteres de la A-Z';

    }

    return error;

}

function validatePromo(value) {
    let error;

    if (!value) {

        error = 'Campo obligatorio';

    } else if (!/^[A-Za-zäÄëËïÏöÖüÜáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ.-\u00f1\u00d1\-.]{4,64}$/i.test(value)) {

        error = 'La promoción debe contener al menos 4 letras, números, . - ( )';

    }

    return error;

}

function validateDuration(value){
    let error;

    if (!value) {

        error = 'Campo obligatorio';

    } else if (!/^[0-9]{1,4}$/i.test(value)) {

        error = 'Sólo se aceptan números'
    }

    return error;

}




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
                {({errors}) => <Form>
                    <label htmlFor="city">Ciudad</label>
                    <Field id="city" name="city" validate={validateCity}/>
                    {errors.city}
                    <label htmlFor="promoName">Nombre promo</label>
                    <Field id="promoName" name="promoName" validate={validatePromo}/>
                    {errors.promoName}
                    <label htmlFor="duration">Duración(h)</label>
                    <Field id="duration" name="duration" validate={validateDuration}/>
                    {errors.duration}
                    <button type={"submit"}>Guardar promoción</button>

                </Form>}
            </Formik>

        </div>
    </div>;


};
