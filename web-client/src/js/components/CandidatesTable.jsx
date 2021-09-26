import * as React from "react";
import {AccountCircle} from '@material-ui/icons';
import {ProgressBar} from "./ProgressBar";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export const CandidatesTable = (props) => (


    <tr className={"table__row"}>
        <td className={"table__info"}>
            {props.candidate.name} {props.candidate.lastName}
            <div className={"table__wrapper__icons"}>
            <a className={"table__info--link"} href={"https://www.freecodecamp.org/" + `${props.candidate.userFree}`} title="Perfil FreeCodeCamp"
               target="_blank">

                <AccountCircle className={"table__icon"}/> </a>
            <DeleteForeverOutlinedIcon className="card__delete" onClick={props.deleteCandidateById(props.candidate.id)}/>
            </div></td>
        <td className={"table__info"}>{props.candidate.age}</td>
        <td className={"table__info"}>{props.candidate.mail}</td>
        <td className={"table__info table__info--progress"}> HTML<ProgressBar done={props.candidate.completedHtml}/>
            JS<ProgressBar done={props.candidate.completedJS}/>
            CSS<ProgressBar done={props.candidate.completedCss}/>
        </td>
    </tr>


);




