import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions?</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-5">
              <img
                src="/assets/contact.png"
                alt="Contact Us"
                height="300px"
                width="300px"
              />
            </div>
            <div className="col-md-6">
              <form>
              <div class="mb-3">
                  <label
                    htmlFor="FormControlInput1"
                    className="form-label"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="FormControlInput1"
                 
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  
                </div>
                
                <div class="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
