const OneBookmark = ({ element }) => {
  // console.log(element);
  return (
    <div>
      <h1 className="text-base font-medium rounded-sm opacity-60 bg-red-400 m-2 p-2">
        {element.title}
      </h1>
    </div>
  );
};

export default OneBookmark;
