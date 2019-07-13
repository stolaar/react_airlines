import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_mk from "react-intl/locale-data/mk";
import locale_sq from "react-intl/locale-data/sq";

import messages_en from "./translations/en.json";
import messages_mk from "./translations/mk.json";
import messages_sq from "./translations/sq.json";

addLocaleData([...locale_en, ...locale_mk, ...locale_sq]);

const messages = {
  en: messages_en,
  mk: messages_mk,
  sq: messages_sq
};

ReactDOM.render(
  <IntlProvider locale="en" messages={messages["en"]}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
