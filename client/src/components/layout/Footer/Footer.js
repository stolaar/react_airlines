import React from "react";
import "./Footer.css";
import { connect } from "react-redux";
import { changeLanguage } from "../../../actions/languageActions";
import PropTypes from "prop-types";

function Footer(props) {
  const changeLanguageHandler = (e, lang) => {
    e.preventDefault();
    props.changeLanguage(lang);
  };

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

      <ul className="pt-2 list-unstyled list-inline text-center">
        <li className="lang-item list-inline-item">
          <button
            onClick={e => changeLanguageHandler(e, "mk")}
            className="btn-floating lang-btn mx-1"
          >
            Macedonian
          </button>
        </li>
        <li className="lang-item list-inline-item">
          <button
            onClick={e => changeLanguageHandler(e, "en")}
            className="btn-floating lang-btn mx-1"
          >
            English
          </button>
        </li>

        <li className="list-inline-item lang-item">
          <button
            onClick={e => changeLanguageHandler(e, "sq")}
            className="btn-floating lang-btn mx-1"
          >
            Albanian
          </button>
        </li>
      </ul>

      <div className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()}, Made with pure{" "}
        <i style={{ color: "red" }} className="fas fa-fire-alt" /> by Aleksandar
      </div>
    </footer>
  );
}

Footer.propTypes = {
  changeLanguage: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang))
});

export default connect(
  null,
  mapDispatchToProps
)(Footer);
