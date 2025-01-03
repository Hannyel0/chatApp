import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Chat from "./pages/Chat"
import ProtectedRoute from "./components/ProtectedRoute"




function App() {



  return(

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
      <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>}/>
      <Route path="*" element={<div className="h-screen flex justify-center items-center font-bold text-4xl">404 Not Found</div>} />

    </Routes>
  )

}

export default App
