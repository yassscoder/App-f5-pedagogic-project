import * as React from "react";
import "../../scss/Candidates.scss";
import {Link} from "react-router-dom";


export const Candidates = () => (

    <div className={"container"}>
        <div className={"table"}>
            <div className={"table__border"}>
                <div className={"border__item"} id={"name"}>NOMBRE</div>
                <div className={"border__item"} id={"lastName"}>APELLIDO</div>
                <div className={"border__item"} id={"sity"}>CIUDAD</div>
                <div className={"border__item"} id={"phone"}>TELEFONO</div>
                <div className={"border__item"} id={"mail"}>EMAIL</div>
            </div>
            <div className={"table__content"}>
                <div className={"table__row"}>
                    <div className={"table__info"} id={"name"}>Holy</div>
                    <div className={"table__info"} id={"lastName"}>Holy</div>
                    <div className={"table__info"} id={"sity"}>Holy</div>
                    <div className={"table__info"} id={"phone"}>1231123</div>
                    <div className={"table__info"} id={"mail"}>5123</div>
                </div>

                <div className={"table__row"}>
                    <div className={"table__info"} id={"name"}>Holy</div>
                    <div className={"table__info"} id={"lastName"}>Holy</div>
                    <div className={"table__info"} id={"sity"}>Holy</div>
                    <div className={"table__info"} id={"phone"}>1231123</div>
                    <div className={"table__info"} id={"mail"}>5123</div>
                </div>

                <div className={"table__row"}>
                    <div className={"table__info"} id={"name"}>Holy</div>
                    <div className={"table__info"} id={"lastName"}>Holy</div>
                    <div className={"table__info"} id={"sity"}>Holy</div>
                    <div className={"table__info"} id={"phone"}>1231123</div>
                    <div className={"table__info"} id={"mail"}>5123</div>
                </div>

                <div className={"table__row"}>
                    <div className={"table__info"} id={"name"}>Holy</div>
                    <div className={"table__info"} id={"lastName"}>Holy</div>
                    <div className={"table__info"} id={"sity"}>Holy</div>
                    <div className={"table__info"} id={"phone"}>1231123</div>
                    <div className={"table__info"} id={"mail"}>5123</div>
                </div>

            </div>
        </div>
    </div>


)