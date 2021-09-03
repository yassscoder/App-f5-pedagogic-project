import * as React from "react";
import "../../scss/Candidates.scss";
import {Link} from "react-router-dom";


export const Candidates = () => (

    <div className={"container"}>
        <div className={"table"}>
            <div className={"table__border"}>
                <div className={"table__info table__info--bold"} >NOMBRE</div>
                <div className={"table__info table__info--bold"} >APELLIDO</div>
                <div className={"table__info  table__info--bold"} >CIUDAD</div>
                <div className={"table__info table__info--bold"} >TELEFONO</div>
                <div className={"table__info table__info--bold"} >EMAIL</div>
            </div>
            <div className={"table__content"}>
                <div className={"table__row"}>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >1231123</div>
                    <div className={"table__info"} >5123</div>
                </div>

                <div className={"table__row"}>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >1231123</div>
                    <div className={"table__info"} >5123</div>
                </div>

                <div className={"table__row"}>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >1231123</div>
                    <div className={"table__info"} >5123</div>
                </div>

                <div className={"table__row"}>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >Holy</div>
                    <div className={"table__info"} >1231123</div>
                    <div className={"table__info"} >5123</div>
                </div>

            </div>
        </div>
    </div>


)