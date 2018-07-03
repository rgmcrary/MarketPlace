import React    from "react";
import template from "./customer.jsx";

class customer extends React.Component {
  render() {
    return template.call(this);
  }
}

export default customer;
