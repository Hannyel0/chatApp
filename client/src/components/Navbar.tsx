import { Link} from "react-router-dom"
import { useUser } from "../context/UserContext"

export default function Navbar() {

  const {user} = useUser() || {}


  if(user){
    return(
      <nav className="bg-secondary shadow-sm p-5">
        <ul className="flex space-x-11 justify-end text-lg font-semibold">
            <li><Link to="/" className="text-white font-medium transition hover:text-gray-400">Home</Link></li>
            <li><Link to="/profile">{user.name}</Link></li>
        </ul>
    </nav>
    )
  }else{
    return(
      <nav className="bg-secondary shadow-sm p-5">
        <ul className="flex space-x-11 justify-end text-lg font-semibold">
            <li><Link to="/" className="text-white font-medium transition hover:text-gray-400">Home</Link></li>
            <li><Link to="/signup" className="text-white font-medium transition hover:text-gray-400">Signup</Link></li>
            <li><Link to="/login" className="text-white font-medium transition hover:text-gray-400">Login</Link></li>
        </ul>
    </nav>
    )
  }
}
