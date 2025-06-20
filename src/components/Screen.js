import "../styles/Screen.css"
import Information from "./Information";
// import PaymentInformation from "./payment-information";
import Studentprofile from "./Student-profile";
import StudentInformation from "./Student_Information";


    const Screen = () => {
        return (

            <main>
        
                <div className="screen">

                    <div className="top">
                    <Studentprofile/>
                    </div>
                    <div className="student_screen gap-3">
                        <StudentInformation/>
                        {/* <PaymentInformation/> */}
                        <Information/>
                    </div>
                </div>
                </main>
        
        );
    };

    export default Screen;
