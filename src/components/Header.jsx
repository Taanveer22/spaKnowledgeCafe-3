import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-300 my-4">
      <h1 className="text-3xl font-bold text-green-700 mb-2">Knowledge Cafe</h1>
      <img src={logo} className="w-16 rounded-full outline-3 outline-green-700 mb-2" />
    </div>
  );
};

export default Header;
