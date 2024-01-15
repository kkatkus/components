import { CSSProperties, ForwardedRef, forwardRef, ReactElement, useState } from 'react';
import { AriaFieldProps, useField } from '@react-aria/label';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import styled from '@emotion/styled';

import { Colors, Size, Spacing } from '../../style';
import React from 'react';

export type InputType = 'text' | 'number' | 'password';

const Styled = styled.div`
  position: relative;

  > label { }

  > input {
    width: 100%;
    border: 0;
    display: flex;
    
    outline: solid 1px ${Colors.primary};
    outline-offset: -1px;
    border-radius: ${({ size }: { size: Size }) => Spacing[size]};

    &:focus {
      outline-width: 2px;
    }

    &:-webkit-autofill,
    &input:-webkit-autofill:hover,
    &input:-webkit-autofill:focus {
      font-size: inherit;
    }
  }

  > .description {
    
  }

  > .error {
    padding-top: ${({ size }: { size: Size }) => Spacing[size]};
    color: ${Colors.error};
  }

  > .eye {
    position: absolute;
    top: 50%;
    right: ${Spacing.sm};
    opacity: 0.3;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;

interface Props extends AriaFieldProps {
  className?: string;
  style?: CSSProperties;
  name?: string;
  type?: InputType;
  size?: Size;
  hidePlaceholder?: boolean;
}
function Input(
  { className = '', style, size = 'md', name, type = 'text', label, hidePlaceholder = false, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const [showChars, setShowChars] = useState<boolean>(false);
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField(props);

  const icon =
    type === 'password' &&
    (showChars ? (
      <EyeSlashIcon className="eye" onClick={() => setShowChars(false)} />
    ) : (
      <EyeIcon className="eye" onClick={() => setShowChars(true)} />
    ));

  return (
    <Styled size={size}>
      {label && <label {...labelProps}>{label}</label>}
      <input
       {...fieldProps}
       style={{ ...style }}
       className={className}
        ref={ref as never}
        name={name}
        type={type === 'password' && showChars ? 'text' : type}
        {...(!hidePlaceholder &&
          (props['aria-label'] || props['aria-labelledby']) && {
            placeholder: props['aria-label'] || props['aria-labelledby'],
          })}
       
        
      />

      {icon}

      {props.description && (
        <div className="description" {...descriptionProps}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div className="error" {...errorMessageProps}>
          {String(props.errorMessage)}
        </div>
      )}
    </Styled>
  );
}

export default forwardRef(Input);
