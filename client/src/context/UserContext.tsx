import React, {createContext, useContext, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios, { Axios, AxiosError, AxiosResponse } from "axios"
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


    


    useEffect(()=>{

        const checkAuth = async ()=>{

            try{

                const response: AxiosResponse<{message: string, cookie: string}> = await axios.get("http://localhost:3939/auth/cookie", {
                    withCredentials: true
                })

                const token = response.data.cookie

                if(token){

                    const userResponse: AxiosResponse<{user: User}> = await axios.get("http://localhost:3939/auth/auth", {
                        withCredentials: true
                    })
            
                    setUser(userResponse.data.user)

                    

                }       
    
            }catch(err: any){
    
                console.log("Not able to get the user Data")
                console.log({message: err.message})
    
            }
                

        }
        checkAuth()

    }, [location.pathname])

    const logOut = async () =>{

        try{

            setUser(undefined)
            await axios.post("http://localhost:3939/auth/logout", {}, {withCredentials: true})
            navigate("/")
        

        }catch(err: any){
            console.log("could not log out",)
        }
        
    }
    
    
    return(
        <UserContext.Provider value={{user, logOut}}>

            {children}

        </UserContext.Provider>
    )
}