import React, {createContext, useContext, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios, { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom";

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

type userContextType = {
    user: User | undefined;
    logOut: ()=> void
}


const UserContext = createContext<userContextType | undefined>(undefined)

export const useUser = (): userContextType| undefined=>{
    return useContext(UserContext);
}



export const UserProvider: React.FC<UserProviderProps> = ({children})=>{

    const [user, setUser] = useState<User | undefined>(undefined)
    const location = useLocation()
    const navigate = useNavigate()


    

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
    }, [location.pathname])

    const logOut = async () =>{

        try{

            setUser(undefined)
            await axios.post("http://localhost:3939/logout", {}, {
            withCredentials: true
        })
        navigate("/")

        }catch(err: any){
            console.log("could not log out", err)
        }
        
    }
    
    
    return(
        <UserContext.Provider value={{user, logOut}}>

            {children}

        </UserContext.Provider>
    )
}