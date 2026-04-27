import { FaGithub, FaGoogle } from "react-icons/fa";


const Socialside = () => {
    return (
        <div >
            <h2 className="text-lg font-bold mb-2">Login With</h2>
            <div className="flex flex-col  gap-5">
                <button className="btn w-full border-blue-500 text-blue-500"> <FaGoogle />Login with Google</button>
                <button className="btn w-full "> <FaGithub />Login with Github</button>
            </div>
            
        </div>
    );
};

export default Socialside;