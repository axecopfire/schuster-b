import React from "react";

import PropTypes from "prop-types";

/**
 *
 * @param {Object} props
 * @param {String} props.type - 'polaroid'
 * @param {String} props.frame - 'corners' | 'border'
 */

export default function Photo(props) {
  let classes = "";
  if (props.type) classes += `${props.type} `;
  if (props.frame) classes += `${props.frame} `;
  return <div className={classes}>{props.children}</div>;
}

Photo.propTypes = {
  type: PropTypes.string,
  frame: PropTypes.string,
};
