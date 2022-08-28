import { createContext, useEffect, useState } from "react";
import axios from "axios";

let UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [money, setmoney] = useState({})

    useEffect(() => {
        plan()
    }, [])

    let plan = async () => {
        try {
            let date = await axios.get("https://projectheist.herokuapp.com/characters/2")
            setmoney(date.data)
            console.log(date.data);
        } catch (error) {

        }
    }

    return (
        <UserContext.Provider value={{ money }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext