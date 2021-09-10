import * as React from "react";

export const CandidatesTable = (props) =>

    <div>
        <div className={"table__content"}>

            <div className={"table__row"}>
                <div className={"table__info"} >{ props.candidate.name}</div>
                <div className={"table__info"} >{ props.candidate.lastName}</div>
                <div className={"table__info"} >{ props.candidate.age}</div>
                <div className={"table__info"} >{ props.candidate.mail}</div>
                <div className={"table__info"} >{ props.candidate.userFree}</div>
            </div>
        </div>
    </div>


