import { IoBookmarks } from "react-icons/io5";
const OneBlog = ({ element }) => {
  console.log(element);
  const {
    id,
    cover,
    title,
    author,
    author_img,
    hashtags,
    posted_date,
    reading_time,
  } = element;
  return (
    <div className="space-y-3 m-6">
      <img src={cover} className="w-full h-64 rounded-md" />
      <div className="flex justify-between items-center">
        <img src={author_img} className="w-16 " />
        <h3 className="text-xl font-medium">{author}</h3>
        <p>{posted_date}</p>
        <button className="bg-red-700 p-2 font-medium text-xl flex gap-2 items-center rounded-sm">
          <p>{reading_time} min read </p>
          <span>
            <IoBookmarks />
          </span>
        </button>
      </div>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="flex gap-3">
        <p>#{hashtags[0]}</p>
        <p>#{hashtags[1]}</p>
      </div>
      <button className="bg-blue-700 p-2 font-medium text-xl rounded-md">
        <p> Mark as read</p>
      </button>
    </div>
  );
};

export default OneBlog;
