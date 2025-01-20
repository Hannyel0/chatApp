import React, { useRef, useState } from "react"
import Nopfp from "../assets/no-user-profile.png"
import { IoMdAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import axios from "axios";


type ChatsListProp ={
    type: "chat" | "group"
}

type ModalProps = {

    onClose: ()=> void
}

type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    conversations: Array<string>;
    createdAt: string;
    __v: number
}

export default function SideBar() {

    const [activeTab, setActiveTab] = useState<number>(0)
    const [modalWindow, setModalWindow] = useState<boolean>(false)
    const buttonRef = useRef<HTMLButtonElement |  null>(null)


    const renderTab = ()=>{
        switch(activeTab){
            case 0:
                return <ChatsList type="chat"/>
            case 1:
                return <ChatsList type="group"/>
            default:
                return null
        }
    }


  return (

    <aside className="h-[calc(100vh-68px)] w-full max-w-[16%] min-w-[255px] bg-surface-a10 rounded-md overflow-y-auto transition-all">

        <div className="border-b border-[#434343]">
            
            <ul className="flex justify-evenly items-center">
                <li onClick={()=>setActiveTab(0)} className={`cursor-pointer p-3 font-semibold ${activeTab === 0 ? "text-primary-a10 font-bold" : "text-white font-semibold"}`}>
                    Chats
                </li>
                <li onClick={()=>setActiveTab(1)} className={` cursor-pointer p-3 font-semibold ${activeTab === 1 ? "text-primary-a10 font-bold" : "text-white font-semibold"}`}>
                    Groups
                </li>
            </ul>
            
            
        </div>

        <div className="w-full flex justify-center mt-3 ">

        <button ref={buttonRef} onClick={()=> setModalWindow(!modalWindow)} className="w-[90%] flex justify-center p-2 rounded-md bg-primary-a20 hover:bg-primary-a30"><IoMdAdd className="font-bold text-xl" /></button>

        </div>

        {modalWindow && (
            <Modal onClose={()=> setModalWindow(false)}/>
        )}

        {renderTab()}


        
    </aside>
  )
}

function Modal({onClose}: ModalProps){

    const [users, setUsers] = useState<Array<User>| null>(null)
    const lookInput = useRef<HTMLInputElement | null>(null)



    const handleLookUp = async(e: React.FormEvent)=>{

        e.preventDefault()

        try{

            const response = await axios.post("http://localhost:3939/messaging/userSearch", {query: lookInput.current?.value })

            setUsers(response.data.users)

        }catch(err){

            console.log("something went wrong with the request", err)

        }

    }

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>)=>{


        if(e.target === e.currentTarget){
            onClose()
        }
    }


    return(
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center" onClick={handleModalClick}>

            <div className=" bg-surface-a0 p-5 rounded-md md:max-w-[75%] sm:max-w-[30%] h-[50%] z-50 overflow-y-auto  scrollbar-thin scrollbar-thumb-primary-a0
        scrollbar-track-surface-a20">
             <form className=" bg-surface-a10 p-2 rounded-md flex justify-between items-center mb-4" onSubmit={handleLookUp}>
                <input ref={lookInput} type="text" placeholder="LookUp users" className=" bg-transparent flex-grow outline-none" />
                <FaSearch className="ml-2  text-lg cursor-pointer" />
             </form>
             <div>
               {users?.map((user, i)=>(

                <div key={i}  className="bg-surface-a10 p-3 cursor-pointer flex items-center rounded-lg mb-3">
                <div className="h-10 w-10 ">
                    <img src={Nopfp}  className="rounded-full"/>
                </div>
                <div className="ml-5"> 
                    <h5 className="font-semibold text-md">{user.name}</h5>
                    <p className="font-light text-gray-500 text-sm">Bio user</p>

                </div>
            </div>

               ))}
                    
                
             </div>
        </div>

        </div>
        
    )


}


function ChatsList({type}: ChatsListProp){

    return(
        <div className="p-3 mt-4 ">
            <div className="bg-surface-a20 p-2 flex cursor-pointer rounded-md">
                <div className="w-12 h-12">
                    <img src={Nopfp} alt="profile pic" className="h-auto rounded-full border border-surface-a30 shadow-sm hover:scale-110 transition-all" />
                </div>
                <div className="ml-3">
                    <h5 className="font-semibold">{type === "chat" ? "Friend" : "The group"}</h5>
                    <p className="font-light text-gray-500">{type === "chat" ? "Last message goes here" : "Description goes here"}</p>
                </div>
            </div>
        </div>
    )
}





