import * as React from "react";
import "../../scss/Candidates.scss";

import {CandidatesTable} from "./CandidatesTable";
import {CandidateApi} from "../API/CandidateApi";
const candidateApi = new CandidateApi();
export const CandidateList = ({candidates, successfullyDeleted}) => {

    const deleteCandidateById = (id) => () => {
        candidateApi.deleteCandidate(id)
            .then(successfullyDeleted)
    }
    return (
    <div className={"table__container"}>
    <table className={"table"}>
        <thead>
        <tr className={"table__header"}>
            <th className={"table__info table__info--bold"}>Aspirante</th>
            <th className={"table__info  table__info--bold"}>EDAD</th>
            <th className={"table__info table__info--bold"}>EMAIL</th>
            <th className={"table__info table__info--bold"}>PROGRESO</th>
        </tr>

        </thead>
        <tbody className={"table__body"}>
        {candidates.map((candidate =>
            <CandidatesTable candidate={candidate}
                             deleteCandidateById={deleteCandidateById}/>
        ))}
        </tbody>
    </table>
    </div>
);
}
