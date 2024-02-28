import React, { LiHTMLAttributes, useRef } from 'react';

import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { useOption } from '@react-aria/listbox';
import { ListState } from 'react-stately';
import type { Node } from '@react-types/shared';
import { CheckIcon } from '@heroicons/react/24/solid';
import styled from '@emotion/styled';

interface ListBoxItemProps extends LiHTMLAttributes<HTMLLIElement> {
  isFocused: boolean;
  isSelected: boolean;
}
const Styled = styled.li<ListBoxItemProps>`
  background: ${({ isFocused }) => (isFocused ? '#eeeeee' : '')};
  color: ${({ isFocused, isSelected }) => (isFocused ? '#111' : isSelected ? '#111' : '#333')};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? '600' : 'normal')};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  outline: none;

  .kk-selected {
    width: 18px;
  }
`;

interface Props<T> {
  item: Node<unknown>;
  state: ListState<unknown>;
}
export default function ListBoxOption<T>({ item, state }: Props<T>) {
  const ref = useRef(null);
  const { optionProps, isDisabled, isSelected, isFocused } = useOption({ key: item.key }, state, ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Styled
      {...mergeProps(optionProps, focusProps)}
      isFocused={isFocused}
      isSelected={isSelected}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      {item.rendered}
      {isSelected && <CheckIcon className="kk-selected" aria-hidden="true" />}
    </Styled>
  );
}
