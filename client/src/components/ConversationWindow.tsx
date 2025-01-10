import Nopfp from "../assets/no-user-profile.png"
import { IoSend } from "react-icons/io5";

export default function ConversationWindow() {

  return (
    <section className="h-[calc(100vh-68px)] w-[99%] rounded-md bg-surface-a10 flex flex-col justify-between p-5">
        <div className="flex items-center p-3 border-b  border-[#434343]">
            <div className="w-11 h-11">
                <img src={Nopfp} alt="Prfile picture" className="rounded-full" />
            </div>
            <h3 className="font-bold text-lg ml-5">
                Max Carlos
            </h3>

        </div>
        <div className="flex flex-col flex-grow justify-end overflow-y-auto p-5">
            <div className="flex justify-end">
                <div className="flex justify-end bg-surface-a20 rounded-lg max-w-[50%] p-5">
                    <p className="">Here would go all the messages</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center  ">
            <form className="p-4 flex items-center justify-between w-[90%] bg-surface-a20 rounded-md">
                <input type="text" placeholder="Write here..." className="p-3 rounded-3xl w-[55%] outline-none bg-surface-a30" />
                <button className="cursor-pointer"><IoSend className="text-2xl"/></button>
            </form>
        </div>

    </section>
  )
}
