import { useState, useEffect } from "react";
import OneBlog from "./OneBlog";
const Blogs = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="w-full sm:w-2/3">
      <h1>blogs available : {cards.length}</h1>
      {cards.map((element, index) => (
        <OneBlog element={element} key={index}></OneBlog>
      ))}
    </div>
  );
};

export default Blogs;
