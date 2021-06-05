import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {currYear} | ShapeAI.tech</p>
    </footer>
  );
}

export default Footer;
