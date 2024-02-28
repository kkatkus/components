import React, {ReactNode, forwardRef, useRef} from 'react';
import {AriaButtonOptions, useButton} from '@react-aria/button';

interface Props extends AriaButtonOptions<'button'> {
  className?: string;
  children: ReactNode;
  ref: React.Ref<HTMLButtonElement>
}
function Button({className, ...props}: Props) {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button className={className} {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}

export default forwardRef(Button);
