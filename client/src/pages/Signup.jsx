import Navbar from "../components/Navbar"
import Form from "../components/Form"


export default function Signup() {


  const handleFormData = (data) =>{

    console.log(data, "From the parent component")
  }

  return (
    <>
    <Navbar/>
    <h1 style={{textAlign: "center"}}>Sign Up</h1>
    <Form type="signUp" sendDataToParent={handleFormData}/>
    </>
  )
}
