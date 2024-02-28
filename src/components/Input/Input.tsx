import React, { CSSProperties, ReactElement, useState } from 'react';
import { AriaTextFieldProps, useTextField } from '@react-aria/textfield';
import styled from '@emotion/styled';

import { theme, Size } from '../../theme';
import SufixIcon from './SufixIcon';
import { InputType } from './Input.d';

interface StyledProps {
  size: Size;
}
const Styled = styled.div<StyledProps>`
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  position: relative;

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

  .kk-input {
    display: flex;
    align-items: center;
    border-radius: ${({ size }) => `${theme.interactive.border.radius[size]}`};
    background-color: #eeeeee;

    &:focus-within {
      border: ${({ size }) => `solid ${theme.interactive.border.width[size]} ${theme.pallete.primary.light}`};
      background-color: white;
    }

    input {
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

    .eye {
      position: relative;
      display: block;
      height: ${({ size }) => `${theme.interactive.icon[size][0]}`};
      width: ${({ size }) => `${theme.interactive.icon[size][0]}`};
      margin-right: ${({ size }) => `${theme.interactive.icon[size][1]}`};
      opacity: 0.2;

      cursor: pointer;
      &:hover {
        opacity: 0.3;
      }
    }

    &:focus-within {
      .eye {
        right: ${({ size }) => `-${theme.interactive.border.width[size]}`};
      }
    }
  }
`;

interface Props extends AriaTextFieldProps {
  className?: string;
  style?: CSSProperties;
  type?: InputType;
  size?: Size;
  hidePlaceholder?: boolean;
}

function getPlaceholder(props: Props) {
  if (props.hidePlaceholder) {
    return {};
  }

  const placeholder = props['aria-label'] || props['aria-labelledby'];
  return placeholder && { placeholder };
}

export default function Input({
  className,
  style,
  size = 'md',
  type = 'text',
  label,
  hidePlaceholder = false,
  ...props
}: Props): ReactElement {
  const ref = React.useRef(null);
  const [showChars, setShowChars] = useState<boolean>(false);
  const { labelProps, inputProps, descriptionProps } = useTextField(props, ref);

  return (
    <Styled className={className} size={size} style={style}>
      {label && (
        <label className="kk-label" {...labelProps}>
          {label}
        </label>
      )}
      <div className="kk-input">
        <input
          {...inputProps}
          ref={ref}
          type={type === 'password' && showChars ? 'text' : type}
          {...getPlaceholder(props)}
        />

        <SufixIcon type={type} showChars={showChars} onClick={() => setShowChars(!showChars)} />
      </div>
      {props.description && (
        <div className="kk-description" {...descriptionProps}>
          {props.description}
        </div>
      )}
    </Styled>
  );
}
