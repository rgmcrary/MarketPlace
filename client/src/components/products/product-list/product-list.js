import React    from "react";
import template from "./product-list.jsx";

class product-list extends React.Component {
  render() {
    return template.call(this);
  }
}

export default product-list;
