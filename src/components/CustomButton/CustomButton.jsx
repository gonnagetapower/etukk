import React from 'react';
import { styled } from '@mui/system';
import { useButton } from '@mui/base/ButtonUnstyled';
import clsx from 'clsx';
import "./CustomButton.css"
const malina={
    500:"#ED1D4A",
    600:"#dd1641",
    700:"#E7C9D2"
}

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  background-color: ${malina[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;


  
  &:hover {
    background-color: ${malina[600]};
  }

  &.active {
    background-color: ${malina[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    background-color: ${malina[700]};
    cursor: not-allowed;
  }

  
`;



const CustomButton = React.forwardRef(function CustomButton(props, ref) {
    const { children,outlined,reverse } = props;
    const { active, disabled, focusVisible, getRootProps } = useButton({
      ...props,
      ref,
      component: CustomButtonRoot,
    });
  
    const classes = {
      active,
      disabled,
      focusVisible,
      outlined,
      reverse
    };
  
    return (
      <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
        {children}
      </CustomButtonRoot>
    );
  });

export default CustomButton;
