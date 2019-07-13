import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className="page-footer text-white bg-dark font-small special-color-dark ">
      <ul className="pt-4 list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a href="/" className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="/" className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="/" className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="/" className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="/" className="btn-floating btn-dribbble mx-1">
            <i className="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>

      <div className="footer-copyright text-center py-3">
        Made with <i style={{ color: "red" }} className="fas fa-fire-alt" /> by
        Aleksandar
      </div>
    </footer>
  );
}
