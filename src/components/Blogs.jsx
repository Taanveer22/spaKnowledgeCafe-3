import { useState, useEffect } from "react";
import OneBlog from "./OneBlog";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="w-full sm:w-2/3">
      {cards.map((element, index) => (
        <OneBlog
          element={element}
          key={index}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></OneBlog>
      ))}
    </div>
  );
};

export default Blogs;
