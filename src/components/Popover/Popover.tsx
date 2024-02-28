import React, { ReactNode, RefObject, forwardRef, useRef } from 'react';
import {DismissButton, Overlay, usePopover} from '@react-aria/overlays';
import type {AriaPopoverProps} from '@react-aria/overlays';
import type {OverlayTriggerState} from 'react-stately';
import styled from '@emotion/styled';

const Styled = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  border: 0px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 16px;
  border-radius: 8px;
  background: white;
  min-width: 150px;

  > svg {
    display: none;
  }
`

interface Props extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: ReactNode;
  state: OverlayTriggerState;
  popoverRef?: RefObject<HTMLDivElement>;
}
export default function Popover(props: Props) {
  let ref = useRef<HTMLDivElement>(null);
  let { popoverRef = ref, state, children, isNonModal } = props;

  let { popoverProps, underlayProps, arrowProps, placement } = usePopover({
    ...props,
    popoverRef
  }, state);

  return (
    <Overlay>
      {!isNonModal && (
        <div {...underlayProps} style={{ position: "fixed", inset: 0 }} />
      )}
      <Styled
        {...popoverProps}
        ref={popoverRef}
        className="kk-popover"
      >
        <svg
          {...arrowProps}
          className="kk-arrow"
          data-placement={placement}
          viewBox="0 0 12 12"
        >
          <path d="M0 0 L6 6 L12 0" />
        </svg>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </Styled>
    </Overlay>
  );
}
