import React, { ReactElement, ReactNode, cloneElement, useRef } from 'react';

import {useOverlayTrigger} from '@react-aria/overlays';
import {OverlayTriggerProps, useOverlayTriggerState} from 'react-stately';
import Popover from './Popover';

interface Props extends OverlayTriggerProps {
  label: string;
  children: ReactElement;
}
export default function PopoverTrigger({ label, children, ...props }: Props) {
  const ref = useRef(null);
  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  );

  return (
    <>
      <button {...triggerProps} ref={ref}>{label}</button>
      {state.isOpen &&
        (
          <Popover {...props} triggerRef={ref} state={state}>
            {cloneElement(children, overlayProps)}
          </Popover>
        )}
    </>
  );
}
