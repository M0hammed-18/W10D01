import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <div>
            <ul>
        
        <Link href= "/" >
            <a><Image src="/logo.png" width={80} height={90}/></a>
             </Link>
   
             <Link href= "/about" >
            <a>About</a>
             </Link>
             <Link href= "/contect" >
            <a>Contect</a>
             </Link>
             <Link href= "/posts" >
            <a>Post</a>
             </Link>
        </ul>
        </div>
     );
}
 
export default Navbar;