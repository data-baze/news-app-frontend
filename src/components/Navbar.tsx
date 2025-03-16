import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 w-full">
      <div className="w-full flex flex-row justify-between gap-10">
        <Link to="/" className="text-xl font-bold">
          News App
        </Link>
        <div className="space-x-4">
          <Link to="/stats">Stats</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
