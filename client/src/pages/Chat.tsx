import SideBar from "../components/SideBar.js"
import Navbar from '../components/Navbar'
import ConversationWindow from "../components/ConversationWindow.js"

export default function Chat() {
  return (
    <>
    <Navbar/>
    <div className="flex">
    <SideBar/>
    <div className="w-[100%] flex justify-center">
    <ConversationWindow/>

    </div>
    

    </div>
    
    </>
  )
}
