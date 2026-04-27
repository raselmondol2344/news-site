import Link from "next/link";

const Catagory = ({ categorys, activeId }) => {
  return (
    <div>
      <h2 className="text-lg font-bold"> All Catagory</h2>
      <ul className="flex flex-col gap-3 mt-6">
        {categorys.news_category.map((category) => {
          return (
            <li
              key={category.category_id} 
              className={`p-2 rounded-md text-md font-bold text-center 
                ${activeId === category.category_id && "bg-purple-500 text-white" } rounded-md font-bold
                text-center text-md`}
            >
              <Link
                className="block"
                // href={`/category/${category.category_id}`}
                href={`/category/${category.category_id}`}
              >
                {" "}
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Catagory;
