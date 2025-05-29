import { assets } from "../assets/assets";
const Navbar = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%] ">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm bg-red-700 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
