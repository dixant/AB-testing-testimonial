import React from "react";
import India from "./testimonials/testimonial-content/india/India";
import US from "./testimonials/testimonial-content/usa/US";

const Components = {
  india: India,
  us: US
};

export default block => {
    console.log(block);
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
