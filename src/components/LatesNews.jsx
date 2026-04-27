import Marquee from "react-fast-marquee";

const news = [
  { "id": 1, "title": "Global Markets Surge Amid Economic Recovery Hopes" },
  { "id": 2, "title": "New AI Breakthrough Promises Faster Medical Diagnoses" },
  { "id": 3, "title": "Major Climate Agreement Reached at International Summit" },
  { "id": 4, "title": "Tech Giants Announce Collaboration on Next-Gen Devices" },
  { "id": 5, "title": "Space Agency Confirms Discovery of Potentially Habitable Planet" }
]


const LatesNews = () => {
    return (
        <div className=" rounded-md container mx-auto   py-4 px-2 text-gray-700 font-semibold bg-red-100 flex justify-between gap-4 items-center">
            <button className="text-white bg-red-400 btn">Breaking News</button>
            <Marquee pauseOnClick={true} pauseOnHover={true} speed={100}>
                {
                    news.map(n=>{
                        return <span className="ml-10" key={n.id}>{n.title}</span>
                    })
                }
            </Marquee>

        </div>
    );
};

export default LatesNews;