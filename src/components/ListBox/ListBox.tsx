import React, { useRef } from 'react';

import type { AriaListBoxOptions } from '@react-aria/listbox';
import { useListBox } from '@react-aria/listbox';
import { ListState } from 'react-stately';
import ListBoxOption from './ListBoxOption';
import styled from '@emotion/styled';

const Styled = styled.div`
  > ul {
    max-height: 300px;
    overflow: auto;
    list-style: none;
    padding: 0;
    margin: 4px 0;
    outline: none;
    width: 100%;
  }
`

interface Props extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}
export default function ListBox(props: Props) {
  const ref = useRef(null);
  const { listBoxProps, labelProps } = useListBox(props, props.state, ref);
  return (
    <Styled>
      <div {...labelProps}>{props.label}</div>
      <ul {...listBoxProps} ref={ref}>
        {[...props.state.collection].map((item) => (
          <ListBoxOption key={item.key} item={item} state={props.state} />
        ))}
      </ul>
    </Styled>
  );
}
