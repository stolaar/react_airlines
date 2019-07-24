import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Admin(props) {
  useEffect(() => {
    !props.auth.isAuthenticated && props.history.push("/");
  }, [props]);

  return (
    <div className="p-4 row services">
      <div className="col-md-12 text-center">
        <h2>{props.auth.user.name}</h2>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(withRouter(Admin));
