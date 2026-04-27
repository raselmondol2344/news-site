import Image from "next/image";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocial, IoStar } from "react-icons/io5";
import { TiEye } from "react-icons/ti";

const NewsCard = ({ news }) => {
  // console.log(news);
  return (
    <div className="container mx-auto my-8">
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
            {/* author */}
            <div className="flex justify-between items-center bg-slate-200 p-4">
                <div className="flex gap-2 items-center" >
                    <Image
                    src={news.author?.img}
                    alt={news.title}
                    height={40}
                    width={40}
                    className="rounded-full"
                    
                    />

                     <div className="">
                    <h2 className="font-semibold">{news.author?.name}</h2>
                    <p className="text-xs">{news.author?.published_date}</p>

                </div>

                </div>
               
                

                <div className="flex justify-center gap-2">
                    <IoShareSocial />
                    <FaRegBookmark />

                
            </div>

            </div>
            
          <h2 className="card-title">{news.title}</h2>


          <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            width={300}
            height={300}
            className="w-full"
          />
        </figure>
        <p className="line-clamp-4">{news.details}</p>


        <div className="flex justify-between items-center py-5">
            <div className="flex justify-center gap-2 items-center">
                <h2  className="flex justify-center gap-2 items-center"> <IoStar className="text-lg text-yellow-500" />{news.rating.number}</h2>
                <h2  className="flex justify-center gap-2 items-center"> <TiEye  className="text-lg"/>{news.total_view}</h2>
            </div>

            <div>
                <Link href={`/news/${news._id}`}><button className="btn text-red-400">See More</button></Link>
                </div>
        </div>
         
        </div>
        
      </div>
    </div>
  );
};

export default NewsCard;
