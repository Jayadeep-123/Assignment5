import "../styles/Screen.css"
import Information from "./Information";
import Navbar from "./Navbar";
import Studentprofile from "./Student-profile";
import StudentInformation from "./Student_Information";


    const Screen = () => {
        return (

            <main>
        
                <div className="screen ">

                    <div className="top">
                    <Studentprofile/>
                    <Navbar/>
                    </div>
                    <div className="student_screen gap-3">
                        <StudentInformation/>
                        <Information/>
                    </div>
                </div>
                </main>
        
        );
    };

    export default Screen;
