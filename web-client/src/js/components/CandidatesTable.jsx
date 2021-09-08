import * as React from "react";

export const CandidatesTable = (props) =>

    <div className={"container"}>
        <div className={"table"}>
            <div className={"table__border"}>
                <div className={"table__info table__info--bold"} >{ props.candidates.name}</div>
                <div className={"table__info table__info--bold"} >{ props.candidate.lastName}</div>
                <div className={"table__info table__info--bold"} >{ props.candidate.age}</div>
                <div className={"table__info table__info--bold"} >{ props.candidate.email}</div>
            </div>
        </div>
    </div>


