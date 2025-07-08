import { useContext, useState } from "react";
import { usePopUpContext} from "../Contexts/popUpContext";

export default function userPopUp () {}
const {saveUserData}= usePopUpContext()
const startingFormData = {name:"",surname:"",email:""}