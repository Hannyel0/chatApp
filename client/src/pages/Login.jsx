import Navbar from "../components/Navbar"
import Form from "../components/Form"


export default function Login() {

  const handleFormData = (data) =>{

    console.log(data, "From the parent component")
  }


  
  return (
    <>
    <Navbar/>
    <Form type="login" sendDataToParent={handleFormData}/>
    </>
  )
}
