"use"
import Link from "next/link";
import Avatar from "@/asset/user.png"
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user;
    console.log("user" , user);
   
    return (
        <div className="flex justify-between container mx-auto mt-10 items-center ">
            <div></div>
            <ul className="flex  justify-between items-center gap-4 text-gray-700 font-semibold">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/carrer">Career</NavLink></li>
            </ul>

           {
  user ? (
    <div className="flex justify-center gap-4 items-center">

  
      <h2 className="font-semibold">{user?.name}</h2>

      
      <Image
        src={user?.image || Avatar}
        width={50}
        height={50}
        alt="user"
        className="rounded-full"
      />

   
      <button
        onClick={() => authClient.signOut()} 
        className="btn bg-red-500 text-white"
      >
        Logout
      </button>

    </div>
  ) : (

  
    <Link href="/login">
      <button className="btn bg-purple-500 text-white">
        Login
      </button>
    </Link>

  )
}

            
        </div>
    );
};

export default Navbar;