import React, { ForwardedRef, forwardRef } from 'react';
import { UseFormErrors } from '../../types';

interface Props<T> {
  valid: boolean;
  submitted: boolean;
  errors: UseFormErrors<T>;
  data: T;
}

export type Ref = HTMLFormElement;

function SimpleFormInner<T>({ valid, submitted, errors, data }: Props<T>, ref: ForwardedRef<HTMLFormElement>) {
  return (
    <>
      {submitted &&
        Object.values(errors).map((err) => (
          <p className="uf-errors" key={err as string}>
            {err as string}
          </p>
        ))}

      <input name="firstName" />
      <br />
      <input name="lastName" />
      <br />
      <button disabled={!valid} type="submit">
        submit
      </button>
      <button type="reset" style={{ marginLeft: '8px' }}>
        reset
      </button>
      <p>
        Submitted: <code>{submitted ? 'true' : 'false'}</code>
      </p>

      <p>Form data:</p>
      <code>{JSON.stringify(data)}</code>

      <p>Errors:</p>
      <code>{JSON.stringify(errors)}</code>
    </>
  );
}

export const SimpleForm = forwardRef(SimpleFormInner);
