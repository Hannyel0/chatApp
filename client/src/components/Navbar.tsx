import { Link} from "react-router-dom"
import { useUser } from "../context/UserContext"

export default function Navbar() {

  const {user} = useUser() || {}


  if(user){
    return(
      <nav className="bg-surface-a0 shadow-smd p-5">
        <ul className="flex space-x-12 justify-end text-lg font-semibold pr-11">
            <li><Link to="/" className="text-white font-medium transition hover:text-gray-400">Home</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="/profile">{user.name}</Link></li>
        </ul>
    </nav>
    )
  }else{
    return(
      <nav className="bg-surface-a0 shadow-md p-5">
        <ul className="flex space-x-12 justify-end text-lg font-semibold pr-11">
            <li><Link to="/" className="text-white font-medium transition hover:text-gray-400">Home</Link></li>
            <li><Link to="/signup" className="text-white font-medium transition hover:text-gray-400">Signup</Link></li>
            <li><Link to="/login" className="text-white font-medium transition hover:text-gray-400">Login</Link></li>
        </ul>
    </nav>
    )
  }
}
