// import Tippy from '@tippyjs/react';
import React from 'react';
import * as SC from "./DescrTooltip.js";

const DescrTooltip = ({children, content}) => {
  return (
    <SC.StyledTooltip
      html={content}
      animation="shift"
      arrow
      interactive
      // trigger="click"
    >
      {children}
    </SC.StyledTooltip>
  );
};

export default DescrTooltip;
