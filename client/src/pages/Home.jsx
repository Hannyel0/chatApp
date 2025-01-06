import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
    <Navbar/>
    <section className="flex items-start justify-center h-[calc(100vh-68px)] bg-[url('/home/dex/projects/nodejsP/chatApp/client/src/assets/bg-HP.svg')] bg-no-repeat bg-cover">
    <h1 className="font-bold text-5xl mt-[9rem]"> The Big Chat</h1>

    </section>
    
    </>
  )
}
