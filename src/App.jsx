// import { useState } from "react";

import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="flex gap-2">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
