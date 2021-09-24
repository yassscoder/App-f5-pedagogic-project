import * as React from "react";
import {Link} from "react-router-dom";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


export const TrainingCard = (props) =>
    <div className={"card"}>
        <div className={"card__title"}>
            <h2 className={"card__city"}>{ props.training.city }</h2>
        </div>
        <div className={"card__body"}>

            <h3 className={"card__info"}>{props.training.promoName}</h3>
            <h3 className={"card__info"}>{props.training.duration}h</h3>
            <div className={"card__buttons__wrapper"}>
                <Link className="card__button" to={"/Candidate-list"}>Aspirantes</Link>
                <div className={"card__icons"}>
                    <DeleteForeverOutlinedIcon className="card__delete"/>
                    <EditOutlinedIcon className={"card__edit"}/>
                </div>

            </div>

        </div>
    </div>


