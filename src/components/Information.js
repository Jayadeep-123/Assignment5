import "../styles/Information.css"

const Information = () => {
    return (
        <div className="information bg-red">
            <div className="d-flex align-items-center gap-2 border-bottom border-bottom-custom">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M13.7362 0.833344H16.84C18.1254 0.833344 19.1669 1.88371 19.1669 3.17998V6.30999C19.1669 7.60626 18.1254 8.65662 16.84 8.65662H13.7362C12.4507 8.65662 11.4092 7.60626 11.4092 6.30999V3.17998C11.4092 1.88371 12.4507 0.833344 13.7362 0.833344Z" fill="#56555C" />
                    <path d="M6.26428 11.3434C7.54969 11.3434 8.59126 12.3938 8.59126 13.69V16.82C8.59126 18.1154 7.54969 19.1667 6.26428 19.1667H3.16048C1.87506 19.1667 0.833496 18.1154 0.833496 16.82V13.69C0.833496 12.3938 1.87506 11.3434 3.16048 11.3434H6.26428ZM16.8398 11.3434C18.1253 11.3434 19.1668 12.3938 19.1668 13.69V16.82C19.1668 18.1154 18.1253 19.1667 16.8398 19.1667H13.736C12.4506 19.1667 11.4091 18.1154 11.4091 16.82V13.69C11.4091 12.3938 12.4506 11.3434 13.736 11.3434H16.8398ZM6.26428 0.833344C7.54969 0.833344 8.59126 1.88371 8.59126 3.17998V6.30999C8.59126 7.60626 7.54969 8.65662 6.26428 8.65662H3.16048C1.87506 8.65662 0.833496 7.60626 0.833496 6.30999V3.17998C0.833496 1.88371 1.87506 0.833344 3.16048 0.833344H6.26428Z" fill="#56555C" />
                </svg>
                <h6 className="text-dark"> Information</h6>

            </div>

            <div class="card profile-card shadow-sm mt-2 ">
                <div class="card-header  justify-content-between align-items-center ">
                    <span class="fw-normal custoum-text">Profile Details</span>
                    <div class="row mb-3 profile-info-row p-1">
                        <div class="col-6">
                            <label class="form-label small-label">Aadhar number</label><br />
                            <span class="form-value">6782 6789 9762</span>
                        </div>
                        <div class="col-6 text-end">
                            <label class="form-label small-label">Mother Name</label><br />
                            <span class="form-value text-end">Radha Rani </span>
                        </div>
                        <div class="col-6">
                            <label class="form-label small-label">Date Of  Birth</label><br />
                            <span class="form-value">26-04-2000</span>
                        </div>
                        <div class="col-6 text-end">
                            <label class="form-label small-label">Father Name</label><br />
                            <span class="form-value text-end">Giridhar  </span>
                        </div>
                        <div class="col-12">
                            <label class="form-label ">Address</label><br />
                            <span class="form-value">6th floor ncc building duragmcheruvu road hyderabad</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="card profile-card shadow-sm mt-2">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="fw-normal custoum-text">Campus Details</span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1316_1617)">
                            <path d="M17 10L12 15L7 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1316_1617">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="mt-3 d-flex gap-2 ">
                    <button className="btn btn-sm rounded-pill border-0 custom-green">
                        Current Campus
                    </button>
                    <button className="btn btn-sm rounded-pill border-0 custom-pink">
                        Course
                    </button>

                </div>


            </div>

            <div class="card profile-card shadow-sm mt-2">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="fw-normal custoum-text">Additional Details</span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1316_1617)">
                            <path d="M17 10L12 15L7 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1316_1617">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="mt-3 d-flex gap-2 ">
                    <button className="btn btn-sm rounded-pill border-0 custom-green">
                        Language
                    </button>
                    <button className="btn btn-sm rounded-pill border-0 custom-pink">
                        Sports
                    </button>

                </div>
            </div>





        </div>
    );
}
export default Information;