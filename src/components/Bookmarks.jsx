import OneBookmark from "./OneBookmark";

const Bookmarks = ({ selectedBookmarks, readingTime }) => {
  // console.log(selectedBookmarks);
  return (
    <div className="w-full sm:w-1/3">
      <h1 className="text-2xl font-semibold text-blue-700 m-5">
        Total reading time : {readingTime} minutes{" "}
      </h1>
      <h1 className="text-2xl font-semibold text-red-700 m-5">
        Bookmarks selected : {selectedBookmarks.length} items
      </h1>
      {selectedBookmarks.map((element, index) => (
        <OneBookmark element={element} key={index}></OneBookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
