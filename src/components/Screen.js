import { Routes, Route } from "react-router-dom";
import StudentInformation from "./Student_Information";
import Information from "./Information";
import Payments from "./Payments";
import Studentprofile from "./Student-profile";
import "../styles/Screen.css";
import PaymentInformation from "./payment-information";

const Screen = () => {
  return (
    <main className="w-100">
      <div className="top">
        <Studentprofile />
      </div>

      <div className="student_screen p-0 gap-3">
        <Routes>
          <Route path="/" element={<></>} />
          
          <Route path="/student-profile" element={
            <>
              <StudentInformation />
              <Information />
            </>
          } />
          
          <Route path="/payments"  element={
            <>
              <Payments />
              <PaymentInformation/>
            </>
          } />
        </Routes>
      </div>
    </main>
  );
};

export default Screen;
