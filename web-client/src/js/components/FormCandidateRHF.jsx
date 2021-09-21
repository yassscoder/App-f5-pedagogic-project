import React from 'react';
import { useForm } from 'react-hook-form';
import {Redirect} from "react-router-dom";

export function FormCandidateRHF() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitted, setSubmitted] = useState(false);
    const onSubmit = () => {
        setSubmitted(true);
    }
    if (submitted) {
        return <Redirect to="/candidate-list"/>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("Formación", { required: true })}>
                <option value="hola">{props.training.promoName}</option>
            </select>
            <input type="text" placeholder="Nombre" {...register("Nombre", {required: true, max: 0, maxLength: 100})} />
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

            <input type="submit" />
        </form>
    );
}