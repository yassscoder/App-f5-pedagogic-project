import * as React from "react";
import "../../scss/Candidates.scss";

import {CandidatesTable} from "./CandidatesTable";

export const CandidateList = (props) => (
    <div className={"container"}>
    <div className={"table"}>
        <div className={"table__border"}>
            <div className={"table__info table__info--bold"} >NOMBRE</div>
            <div className={"table__info table__info--bold"} >APELLIDO</div>
            <div className={"table__info  table__info--bold"} >EDAD</div>
            <div className={"table__info table__info--bold"} >EMAIL</div>
            <div className={"table__info table__info--bold"} >USUARIO FREECODECAMP</div>
            <div className={"table__info table__info--bold"} >PROGRESO HTML</div>
            <div className={"table__info table__info--bold"} >PROGRESO JS</div>
            <div className={"table__info table__info--bold"} >PROGRESO CSS</div>
        </div>
        {props.candidates.map(candidate =>
            <CandidatesTable candidate={candidate}/>
        )}

    </div>
    </div>
);
