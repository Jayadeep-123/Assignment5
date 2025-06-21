import { Routes, Route } from "react-router-dom";
import StudentInformation from "./Student_Information";
import Information from "./Information";
import Payments from "./Payments";
import Studentprofile from "./Student-profile";
import "../styles/Screen.css";

const Screen = () => {
  return (
    <main className="w-100">
      {/* Static Top Section (Profile Info) */}
      <div className="top">
        <Studentprofile />
      </div>

      {/* Dynamic Section (based on route) */}
      <div className="student_screen p-0 gap-3">
        <Routes>
          {/* Show blank for base route */}
          <Route path="/" element={<></>} />
          
          <Route path="/student-profile" element={
            <>
              <StudentInformation />
              <Information />
            </>
          } />
          
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </main>
  );
};

export default Screen;
