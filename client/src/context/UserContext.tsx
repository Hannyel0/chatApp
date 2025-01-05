import React, {createContext, useContext, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios, { AxiosResponse } from "axios"

type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    createdAt: string;
    __v: number
}

interface UserProviderProps{
    children: React.ReactNode
}


const UserContext = createContext<User | undefined>(undefined)

export const useUser = (): User | undefined=>{
    return useContext(UserContext);
}


export const UserProvider: React.FC<UserProviderProps> = ({children})=>{

    const [user, setUser] = useState<User | undefined>(undefined)
    const location = useLocation()


    

    const allowedPaths = ["/profile", "/chat"]

    useEffect(()=>{

        const checkAuth = async ()=>{

            if(allowedPaths.includes(location.pathname)){

                try{

                    const response: AxiosResponse<{user: User}> = await axios.get("http://localhost:3939/auth", {
                        withCredentials: true
                    })
        
                    setUser(response.data.user)
    
                }catch(err: any){
    
                    console.log("Not able to get the user Data")
                    console.log({message: err.message})
    
                }
            }

        }
        checkAuth()
    }, [])
    
    
    return(
        <UserContext.Provider value={user}>

            {children}

        </UserContext.Provider>
    )
}