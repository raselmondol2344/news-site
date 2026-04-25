import Link from "next/link";
import user from "@/asset/user.png"
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="flex justify-between container mx-auto mt-10 items-center ">
            <div></div>
            <ul className="flex  justify-between items-center gap-4 text-gray-700 font-semibold">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/carrer">Career</NavLink></li>
            </ul>

            <div className="flex justify-center gap-4 items-center">
                <Image  src={user} 
                 width={50} 
                height={50}
                alt='logo'/>

                <button className="btn bg-purple-500 text-white">Login</button>
            </div>

            
        </div>
    );
};

export default Navbar;