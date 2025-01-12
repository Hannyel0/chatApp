import { useState } from "react"
import Nopfp from "../assets/no-user-profile.png"
import { IoMdAdd } from "react-icons/io";


type ChatsListProp ={
    type: "chat" | "group"
}

export default function SideBar() {

    const [activeTab, setActiveTab] = useState<number>(0)


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

    <aside className="h-[calc(100vh-68px)] w-full max-w-[16%] min-w-[255px] bg-surface-a10 rounded-md overflow-y-auto transition-all ">

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
        <div className="w-full flex justify-center mt-3">
        <button className="w-[90%] flex justify-center p-2 rounded-md bg-primary-a20 hover:bg-primary-a30"><IoMdAdd className="font-bold text-xl" /></button>
        </div>

        {renderTab()}
    </aside>
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





