import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <nav>
                    <div className="d-flex gap-5">
                        <span className="custom-text-color fw-bold">Student Profile</span>
                        <span className="custom-text-color">Payments</span>
                        <span className="custom-text-color">Transport</span>
                        <span className="custom-text-color">Academics</span>
                        <span className="custom-text-color">Alerts</span>
                        <span className="custom-text-color">History</span>
                        <span className="custom-text-color">Room Allotment</span>
                        <span className="custom-text-color">Issue Forms</span>
                        <span className="custom-text-color">Certificates</span>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
