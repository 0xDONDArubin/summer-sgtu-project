import React from "react";

const Singup = () => {
    return (
        <>
            <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Register
            </button>

            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Sing up With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Sing up With Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmfor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput"/>
                                </div>
                                <div className="mb-3">
                                    <label htmfor="exampleInputEmail2" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmfor="exampleInputPassword2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                    <label className="form-check-label" htmfor="exampleCheck2">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-dark w-100 mt-5">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Singup;