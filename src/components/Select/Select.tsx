import React, { CSSProperties, ReactElement, useRef } from 'react';
import styled from '@emotion/styled';

import { theme, Size } from '../../theme';
import { AriaSelectProps, HiddenSelect, useSelect } from '@react-aria/select';
import { useSelectState } from 'react-stately';
import { Popover } from '../Popover';
import { ListBox } from '../ListBox';
import { Button } from '../Button';
import { fieldMixin } from '../../theme/mixins';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const iconSize = {
  xs: '14px',
  sm: '16px',
  md: '18px',
  lg: '21px',
};

const StyledIcon = styled(ChevronDownIcon)<{ size: Size }>`
  position: relative;
  right: ${({ size }) => `calc(-${theme.interactive.padding[size][1]} / 2)`};
  height: ${({ size }) => `${theme.interactive.icon[size]}`};
  width: ${({ size }) => `${theme.interactive.icon[size]}`};
  margin: 0 0 0 4px;
  color: ${theme.pallete.primary.dark};
`;

interface ButtonProps {
  size: Size;
  isOpen?: boolean;
  isFocusVisible?: boolean;
}
const StyledButton = styled(Button)<ButtonProps>`
  appearance: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  ${({ size, isOpen }) => fieldMixin({ size, isOpen })};
`;

const Styled = styled.div<{ size: Size }>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  font-size: ${({ size }) => `${theme.typography.labels[size].fontSize}`};

  .kk-label {
    font-size: ${({ size }) => '80%'};
    line-height: ${({ size }) => `${theme.typography.labels[size].lineHeight}`};
    padding-bottom: ${({ size }) => `calc(${theme.interactive.padding[size][0]} / 2)`};
  }

  .kk-description {
    font-size: ${({ size }) => `80%`};
    line-height: ${({ size }) => `${theme.typography.labels[size].lineHeight}`};
    padding-top: ${({ size }) => `calc(${theme.interactive.padding[size][0]} / 4)`};
  }

  .kk-select {
    display: flex;
    align-items: center;
    border-radius: ${({ size }) => `${theme.interactive.border.radius[size]}`};
    background-color: #eeeeee;

    &:focus-within {
      border: ${({ size }) => `solid ${theme.interactive.border.width[size]} ${theme.pallete.primary.light}`};
      background-color: white;
    }

    select {
      border: 0;
      outline: none;
      background-color: transparent;
      width: 100%;
      padding: ${({ size }) => `${theme.interactive.padding[size][0]} ${theme.interactive.padding[size][1]}`};
      font-size: ${({ size }) => `${theme.typography.labels[size].fontSize}`};

      &:focus {
        padding: ${({ size }) =>
          `calc(${theme.interactive.padding[size][0]} - ${theme.interactive.border.width[size]}) calc(${theme.interactive.padding[size][1]} - ${theme.interactive.border.width[size]})`};
      }
    }
  }
`;

interface Props extends AriaSelectProps<any> {
  className?: string;
  style?: CSSProperties;
  size?: Size;
}
export default function Select({ className, style, size = 'md', ...props }: Props): ReactElement {
  const state = useSelectState(props);
  const ref = useRef(null);
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  return (
    <Styled className={className} style={style} size={size} ref={ref}>
      <div {...labelProps}>{props.label}</div>
      <HiddenSelect
        isDisabled={props.isDisabled}
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <StyledButton size={size} isOpen={state.isOpen} isFocusVisible={state.isFocused} {...triggerProps}>
        <span {...valueProps}>{state.selectedItem ? state.selectedItem.rendered : 'Select an option'}</span>
        <StyledIcon size={size} />
      </StyledButton>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </Styled>
  );
}
