import { Route, Routes } from "react-router-dom";
import "./App.css";
import Overview from "./pages/Overview";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Aside from "./components/Aside";
import Nav from "./components/Nav";

function App() {
  return (
    <div className=" shadow-md min-h-screen w-full grid grid-cols-12  ">
      <div className="col-span-2 px-4 py-5 bg-white">
        <Aside />
      </div>
      <div className="col-span-10 bg-[#f9fbfc]">
        <Nav />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
