import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full">
      <Navbar />
      <main className=" p-4 max-w-4xl">
        <Outlet /> {/* Renders the child route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
