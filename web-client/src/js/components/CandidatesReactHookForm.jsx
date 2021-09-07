import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {Redirect} from "react-router";

export const TrainingReactHookForm= () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitted, setSubmitted] = useState(false)
    // const onSubmit = () => {
    //     setSubmitted(true);
    // }
    // if (submitted){
    //     return <Redirect to={"/Training-added"}>
    //
    //     </Redirect>
    // }
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className={"container__form"}>
            <form className={"form__"} onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  placeholder="Ciudad" {...register("City", {required: true, min: 3, maxLength: 80})} />
                {errors.City?.type === 'required' && "Campo obligatorio"}
                <input type="text" placeholder="Formación y nombre promo" {...register("Training", {required: true, maxLength: 100})} />
                {errors.Training?.type === 'required' && "Campo obligatorio"}
                <input type="number" placeholder="Duration(h)" {...register("Duration", {required: true})} />
                {errors.Duration?.type === 'required' && "Campo obligatorio"}

                <button type="submit">Crear formación</button>
            </form>
        </div>
    );
}