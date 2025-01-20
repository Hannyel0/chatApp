import { useEffect, useState } from "react"
import axios from "axios"


type User = {
    _id: string;
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    conversations: Array<string>;
    createdAt: string;
    __v: number
}

export default function UsersProfile() {

    const userId = "678dac40c73b09a95f76d1d3"

    const [userPofile, setUserProfile] = useState<Array<User> | null>(null)



    useEffect(()=>{

        const getProfileData = async ()=>{

            try{

                const response = await axios.post("http://localhost:3939/users/getProfileInfo", {userId: userId})

                console.log(response.data.profileData)
    
            }catch(err){
                console.log("There was an error fetching the user data")
            }


        }

        getProfileData()


        
    },[])
  return (
    <>

    <h1>User Name</h1>
    </>
  )
}
