import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";

import locale_en from "react-intl/locale-data/en";
import locale_mk from "react-intl/locale-data/mk";
import locale_sq from "react-intl/locale-data/sq";

import messages_en from "../translations/en.json";
import messages_mk from "../translations/mk.json";
import messages_sq from "../translations/sq.json";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const messages = {
  en: messages_en,
  mk: messages_mk,
  sq: messages_sq
};

function ConnectedIntl(props) {
  addLocaleData([...locale_en, ...locale_mk, ...locale_sq]);
  return (
    <IntlProvider locale={props.lang.lang} messages={messages[props.lang.lang]}>
      {props.children}
    </IntlProvider>
  );
}

const mapStateToProps = ({ lang }) => ({ lang });

ConnectedIntl.propTypes = {
  lang: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ConnectedIntl);
