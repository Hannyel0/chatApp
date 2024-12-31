import { Link} from "react-router-dom"

export default function Navbar() {


  return (
    <>
    <nav className="bg-background-gray-light shadow-sm p-4">
        <ul className="flex space-x-11 justify-end text-lg font-semibold">
            <li><Link to="/" className="text-white font-medium transition hover:text-gray-300">Home</Link></li>
            <li><Link to="/signup" className="text-white font-medium transition hover:text-gray-300">Signup</Link></li>
            <li><Link to="/login" className="text-white font-medium transition hover:text-gray-300">Login</Link></li>
        </ul>
    </nav>
    </>
  )
}
