import Navbar from "../components/Navbar"
import Form from "../components/Form"


export default function Signup() {

  return (
    <>
    <Navbar/>

    <section className="h-[calc(100vh-68px)] bg-[url(/home/dex/projects/nodejsP/chatApp/client/src/assets/bg-forms.svg)] bg-no-repeat bg-cover">
    
      <Form type="signUp" />
    </section>
    </>
  )
}
