import Catagory from "@/components/homepage/Category";
import NewsCard from "@/components/homepage/NewsCard";
import Socialside from "@/components/homepage/Socialside";
import { getcatagory, getNewsbyCatagoryId } from "@/lib/data";




const newscategoryPage =async ({params}) => {
    const {id }= await params;
    console.log(id ,"paramsId");

     const categorys =await  getcatagory();
  // console.log(categorys.news_category);

  const news = await getNewsbyCatagoryId(id);
  //console.log(news);
    return (
       <div className="grid grid-cols-12 gap-5 container mx-auto my-8">


      <div className=" col-span-3">
        <Catagory categorys ={categorys}  activeId={id}></Catagory>

      </div>

      <div className=" bg-base-200 col-span-6">
        <h2 className="py-3 mb-3 text-lg font-semibold ml-2">News by Category</h2>
        <div className="space-y-4">
          {
            news.length > 0 ?  news.map(n => <NewsCard   key={n._id} news={n}>
              
            </NewsCard>): <h1 className="text-3xl text-center my-5 font-bold text-red-500">No News Found</h1>}
        </div>
        
      </div>


      <div className=" col-span-3">
        <Socialside></Socialside>
      </div>
    </div>
    );
};

export default newscategoryPage;