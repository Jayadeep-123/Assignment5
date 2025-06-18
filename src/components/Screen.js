import "../styles/Screen.css"
import Information from "./Information";
import Studentprofile from "./Student-profile";
import StudentInformation from "./Student_Information";


    const Screen = () => {
        return (

            <main>
        
                <div className="screen">


                    <Studentprofile/>
                    <div className="student_screen">
                        <StudentInformation/>
                        <Information/>
                    </div>
                </div>
                </main>
        
        );
    };

    export default Screen;
