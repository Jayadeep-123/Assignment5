import studentImg from "../assets/Student.jpg";
import Button from "@mui/material/Button";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "../styles/Student_profile.css";

const Studentprofile = () => {
    return (
        <div className="container ">
            <div className="row">
                <div className="student_profile col-lg-12 d-flex align-items-center justify-content-between">

                    {/* Left: Image + Name */}
                    <div className="d-flex align-items-center">
                        <div className="profile-image me-3">
                            <img
                                src={studentImg}
                                alt="Student"
                                className="shadowed-profile-img rounded-circle"
                            />
                        </div>
                        <div className="profile-details">
                            <p className="admin-no mb-1">
                                <span className="text-muted">Admin No:</span>
                                <span className="fw-semibold text-dark"> HYD 253487918</span>
                            </p>
                            <h5 className="fw-bold mb-2">Devansh.N</h5>
                            <div className="d-flex align-items-center small text-secondary gap-2">
                                <div className="d-flex align-items-center text-secondary small gap-2">
                                    <span className="text-primary fw-bold " >&#9794;</span>
                                    <span>Male</span>
                                    <span>&bull;</span>
                                    <span>General</span>

                                </div>



                            </div>
                            <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
                                <span className="badge bg-primary px-3 py-2">Class 8</span>
                                <span className="badge bg-success px-3 py-2">Techno</span>
                                <button className="btn btn-light rounded shadow-sm px-3 py-1">
                                    &#8942;
                                </button>

                            </div>

                        </div>

                        <div className="row p-5">
                            <div className="col-md-4 mb-3">
                                <p className="mb-0 text-muted small">Course Track / Orientation</p>
                                <p className="fw-semibold mb-0">Class 8 with Techno</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <p className="mb-0 text-muted small">Admission Type</p>
                                <p className="fw-semibold mb-0">Direct Walkin</p>
                            </div>
                             <div className="col-md-4 mb-3">
                                {/* <p className="mb-0 text-muted small">Admission Type</p>
                                <p className="fw-semibold mb-0">Direct Walkin</p> */}
                            </div>
                            <div className="col-md-4 mb-3">
                                <p className="mb-0 text-muted small">Admission Status</p>
                                <p className="fw-semibold mb-0">Current</p>
                            </div>
                            <div className="col-md-4 mb-3 ">
                                <p className="mb-0 text-muted small">Student Type</p>
                                <p className="fw-semibold mb-0">Residential</p>
                            </div>
                             <div className="col-md-4 mb-3 ">
                                <p className="mb-0 text-muted small">Section</p>
                                <p className="fw-semibold mb-0">8A</p>
                            </div>
                        </div>

                    </div>

                    {/* Right: Button */}
                    <Button
                        variant="contained"
                        startIcon={<TrendingUpIcon />}
                        sx={{
                            height: "40px",
                            width: "160px",
                            backgroundColor: "#3425FF",
                            color: "#ffffff",
                            fontSize: "10px",
                            textTransform: "none", // optional: prevents uppercase
                            "&:hover": {
                                backgroundColor: "#2b20d1", // slightly darker on hover
                            }
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
