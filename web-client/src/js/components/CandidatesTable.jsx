import * as React from "react";
import { AccountCircle} from '@material-ui/icons';
import {Box, Grid} from "@material-ui/core";


// const MyAccountIcon = styled(AccountCircle)({
//     color:'white'
// });
export const CandidatesTable = (props) =>


                <tr className={"table__row"}>
                    <td className={"table__info table__info--flex"} >{ props.candidate.name} { props.candidate.lastName}
                        <a className={"table__acount"} href={"https://www.freecodecamp.org/" + `${props.candidate.userFree}` } target="_blank" >
                             <AccountCircle className={"table__icon"}/> </a></td>
                    <td className={"table__info"} >{ props.candidate.age}</td>
                    <td className={"table__info"} >{ props.candidate.mail}</td>
                    <td className={"table__info"} >{ props.candidate.userFree}</td>
            </tr>







