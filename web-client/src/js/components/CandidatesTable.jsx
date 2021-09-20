import * as React from "react";
import {AccountCircle} from '@material-ui/icons';
import {ProgressBar} from "./ProgressBar";


export const CandidatesTable = (props) => (


    <tr className={"table__row"}>
        <td className={"table__info"}>{props.candidate.name} {props.candidate.lastName}
            <a className={"table__info--link"} href={"https://www.freecodecamp.org/" + `${props.candidate.userFree}`} title="Perfil FreeCodeCamp"
               target="_blank">
                <AccountCircle className={"table__icon"}/> </a></td>
        <td className={"table__info"}>{props.candidate.age}</td>
        <td className={"table__info"}>{props.candidate.mail}</td>
        <td className={"table__info table__info--progress"}> <ProgressBar done={props.candidate.completedHtml}/>
            <ProgressBar done={props.candidate.completedJS}/>
            <ProgressBar done={props.candidate.completedCss}/>
        </td>
    </tr>


);




