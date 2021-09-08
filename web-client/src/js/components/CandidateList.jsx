import * as React from "react";
import "../../scss/Candidates.scss";
// import {Link} from "react-router-dom";
import {CandidatesTable} from "./CandidatesTable";

export const CandidateList = (props) => (

    <section className={"table"}>

        {props.candidates.map( candidate =>
            <CandidatesTable candidate={candidate}/>
        )}

    </section>
);
