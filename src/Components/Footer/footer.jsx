
import React from 'react';


const footer = () => {
   
    
      return (
        <footer className="mt-3 text-center text-lg-start bg-light text-dark">
        <div>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#" className="me-4 link-secondary">
            <i className="fab fa-github" />
          </a>
        </div>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-0 text-secondary" />Epibook S.r.l.
                </h6>
                <p>
                  Il tuo sito special dove trovare i llibri che più ti piacciono
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Libri
                </h6>
                <p>
                  <a href="#!" className="text-reset">Fantasy</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Horror</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Storici</a>
                </p>
                
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Link utili
                </h6>
                <p>
                  <a href="#!" className="text-reset">FAQ</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Account</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Ordini</a>
                </p>
                
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contatti</h6>
                <p><i className="fas fa-home me-3 text-secondary" /> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  epibook@example.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary" /> + 39 800 112 112</p>
                
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4">
          © 2023 Copyright by: 
          <a className="text-reset fw-bold" href="#">lill-angel.com</a>
        </div>
      </footer>
          
      );
    
  }



  export default footer;