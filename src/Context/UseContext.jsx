import { createContext, useEffect, useState } from "react";
import axios from "axios";

let UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [money, setmoney] = useState("2")
    const [data,setdata]=useState({})

    useEffect(() => {
        plan()
    }, [])

    useEffect(()=>{
        plan()
    },[money])

    let plan = async () => {
        try {
            let date = await axios.get(`https://projectheist.herokuapp.com/characters/${money}`)
            setdata(date.data)
            console.log(date.data);
        } catch (error) {

        }
    }

    return (
        <UserContext.Provider value={{ money,setmoney,data }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext