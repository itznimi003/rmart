import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className='text-primary fw-bold'>About Us</h1>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sint non sit eos incidunt! Explicabo voluptatem earum cum iusto laborum! Asperiores nam aspernatur tenetur ratione eius distinctio praesentium, non corporis nemo harum quo magni sunt eveniet. Officia distinctio magni cum sint. Perspiciatis hic obcaecati aperiam asperiores cupiditate deleniti, alias vero sequi, sit facilis cum placeat, commodi iusto voluptatibus. Sit ipsam, amet beatae in voluptatem velit nesciunt exercitationem doloribus, labore, rem ratione reiciendis voluptate! Distinctio illum similique placeat modi perspiciatis quidem ratione soluta cupiditate tempore sequi, quo molestias pariatur saepe blanditiis omnis voluptatum dolorum magni neque. Laboriosam iusto impedit officia quos saepe ab corporis voluptates. Corrupti cum consequuntur atque expedita voluptates vero, temporibus voluptas excepturi rerum nobis repellendus officiis facere rem iure.
          </p>
          <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src="/assets/about.png" alt="About Us" height="400px" width="400px" />
        </div>
      </div>
    </div>
    </>
  )
}

export default About