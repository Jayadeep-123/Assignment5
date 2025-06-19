import "../styles/Student_profile.css";
import Button from "@mui/material/Button";
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // or use any icon you prefer

const Studentprofile = () => {
    return (
        <div className="container  ">
            <div className="row">
                
                <div className="student_profile col-lg-12"> 
                    <Button
                        variant="contained"
                        startIcon={<TrendingUpIcon />}
                        className="profile-button"
                        sx={{ height: '40px',
                            width: '160px',
                            backgroundColor: '#3425FF',
                            color: '#ffffff',
                            fontSize:10
                         }}
                    >
                        View full Profile
                    </Button>




                </div>
            </div>
        </div>
    );
};

export default Studentprofile;
