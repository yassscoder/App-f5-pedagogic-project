import * as React from "react";
import "../../scss/Candidates.scss";

import {CandidatesTable} from "./CandidatesTable";

export const CandidateList = (props) => (

    <table className={"table"}>
    <thead>
        <tr className={"table__header"}>
            <th className={"table__info table__info--bold"} >Aspirante</th>
            <th className={"table__info  table__info--bold"} >EDAD</th>
            <th className={"table__info table__info--bold"} >EMAIL</th>
            <th className={"table__info table__info--bold"} >USUARIO FREECODECAMP</th>
        </tr>

    </thead>
        <tbody className={"table__body"}>
        {props.candidates.map(candidate =>
            <CandidatesTable candidate={candidate}/>
        )}
        </tbody>
    </table>
);
