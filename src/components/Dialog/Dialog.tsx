import React, { ReactNode, useRef } from 'react';

import {AriaDialogProps, useDialog} from '@react-aria/dialog';
import styled from '@emotion/styled';

const Styled = styled.div``;

interface Props extends AriaDialogProps {
  title?: ReactNode;
  children: ReactNode;
}
export default function Dialog({ title, children, ...props }: Props) {
  let ref = useRef(null);
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <Styled
      {...dialogProps}
      ref={ref}
      style={{ padding: 30, maxWidth: 200, outline: 'none' }}
    >
      {title &&
        (
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {title}
          </h3>
        )}
      {children}
    </Styled>
  );
}
