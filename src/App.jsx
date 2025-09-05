import { useState } from "react";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  const [selectedBookmarks, setSelectedBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (element) => {
    // console.log("click atb btn ", element);
    const newSelectedBookmarks = [...selectedBookmarks, element];
    setSelectedBookmarks(newSelectedBookmarks);
  };
  const handleMarkAsRead = (clickedId, clickedReadTime) => {
    // console.log("click mar btn", clickedReadTime);
    const newReadingTime = readingTime + clickedReadTime;
    setReadingTime(newReadingTime);
    // console.log("click mar btn remove id", clickedId);
    const remainingBookmarks = selectedBookmarks.filter((element) => {
      console.log(element);
      return element.id !== clickedId;
    });
    // console.log(remainingBookmarks);
    setSelectedBookmarks(remainingBookmarks);
  };
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="flex flex-col sm:flex-row gap-2">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          selectedBookmarks={selectedBookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </div>
  );
}

export default App;
