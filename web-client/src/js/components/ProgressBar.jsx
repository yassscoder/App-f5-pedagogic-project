import * as React from "react";
import "../../scss/ProgressBar.scss";

export const ProgressBar= ({ done }) => (

    <div className={"progress"}>
        <div className={"progress__done"} style={{
                       width:`${done}%`}}>
            {done}%
        </div>

    </div>

)