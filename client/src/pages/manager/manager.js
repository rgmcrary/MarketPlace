import React    from "react";
import template from "./manager.jsx";

class manager extends React.Component {
  render() {
    return template.call(this);
  }
}

export default manager;
