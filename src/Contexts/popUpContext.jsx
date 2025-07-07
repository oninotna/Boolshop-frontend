import { createContext,useContext,useEffect,useState } from "react";

const PopUpContext = createContext()

function PopUpContextProvider ({children}) {
    const [userData ,setUserData] = useState("")
    const [showPopUp ,setShowPopUp] = useState(false)

    useEffect(()=>{
        const storedData = localStorage.getItem("userData")
        if(storedData) {
            setUserData(JSON.parse(storedData))
        } else {setShowPopUp(true)}
    },[])

    const saveUserData = (data) =>{
        localStorage.setItem("userData",JSON.stringify(data))
        setUserData(userData);
        setShowPopUp(false)
}

return (
<PopUpContext.Provider value={{userData,setUserData,showPopUp}}>
    {children}
</PopUpContext.Provider>)
    


}