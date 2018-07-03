import React    from "react";
import template from "./product-item.jsx";

class product-item extends React.Component {
  render() {
    return template.call(this);
  }
}

export default product-item;
