import { Link } from "react-router-dom"

const Navbar=()=>{
return(<div className="h-full w-1/5 absolute bg-white">
<Link to={'/test'} replace>COME ONs</Link>
<Link to={'/'} replace>Home</Link>
</div> )
}
export default Navbar;