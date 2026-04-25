import Link from "next/link";


const Notfound = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          404
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Oops! Page not found
        </p>

        <p className="mt-2 text-sm text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
            
        </div>
    );
};

export default Notfound;