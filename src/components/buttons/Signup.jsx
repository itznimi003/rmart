import React from 'react'

const Signup = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#SignupModal"
      >
        <span className="fa fa-user-plus me-1"></span>Signup
      </button>

      <div
        className="modal fade"
        id="SignupModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="SignupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="SignupModalLabel">
                Signup
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
              </button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google  me-2"></span>Signup with Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span>Signup with
                Facebook
              </button>
              <div className="mb-3">
                <form>
                  <div class="form-group mb-4">
                  <label className="mb-2"  htmlFor="exampleInput2">Username</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="exampleInput2"
                      placeholder="Enter Username"
                    />
                    </div>
                    <div class="form-group mb-4">
                    <label className="mb-2"  htmlFor="exampleInputEmail2">Email address</label>
                    <input
                      type="email"
                      className="form-control mb-2"
                      id="exampleInputEmail2"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label className="mb-2" htmlFor="exampleInputPassword2">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100 mt-5"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup