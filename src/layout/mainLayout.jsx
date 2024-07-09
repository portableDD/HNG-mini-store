import { Outlet } from "react-router-dom";
import Footer from "../Components/footer";

const MainLayouts = () => {
  return (
    <div className="bg-bgColor text-black">
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayouts