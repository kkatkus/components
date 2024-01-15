import React, { FormEvent } from 'react';

import { useForm } from '../../useForm';
import {
  decimal,
  email,
  equal,
  max,
  maxLength,
  min,
  minLength,
  numeric,
  pattern,
  required,
  requiredTrue,
} from '../../validators';

import './../styles.css';

interface Props {
  /**
   * How should validation trigger
   */
  validateOn?: 'change' | 'blur' | 'submit';
}

interface Form {
  min: number;
  max: number;
  required: string;
  requiredTrue: boolean;
  requiredRadio: string;
  equal: string;
  email: string;
  minLength: string;
  maxLength: string;
  pattern: string;
  numeric: number;
  decimal: number;
}

/**
 * Use built-in validators
 */
export const BuiltIn = ({ validateOn = 'change' }: Props) => {
  const { ref, errors, data, valid, submitted } = useForm<Form>(
    {
      min: ['', [min(5)]],
      max: ['', [max(10)]],
      required: ['', [required()]],
      requiredTrue: ['', [requiredTrue()]],
      requiredRadio: ['', [required()]],
      equal: ['', [equal('required')]],
      email: ['', [email()]],
      minLength: ['', [minLength(2)]],
      maxLength: ['', [maxLength(8)]],
      pattern: ['', [pattern(/^(x-5)$/)]],
      numeric: ['', [numeric()]],
      decimal: ['', [decimal()]],
    },
    { validateOn },
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // can do manual validation
    // const { valid, errors } = validate();
  }

  return (
    <>
      {submitted &&
        Object.keys(errors).map((key) => (
          <p className="uf-errors" key={key}>
            {errors[key]}
          </p>
        ))}
      <form ref={ref} onSubmit={handleSubmit} method="post">
        <input name="min" placeholder="min field" />
        <br />
        <input name="max" placeholder="max field" />
        <br />
        <select name="required">
          <option value="">select required field</option>
          <option value="r1">r1</option>
          <option value="r2">r2</option>
          <option value="r3">r3</option>
        </select>
        <br />
        <label className="checkbox">
          <input name="requiredTrue" type="checkbox" />
          <span></span>
          required true
        </label>
        <div className="radio">
          <label>
            <input name="requiredRadio" type="radio" value="one" />
            <span></span>
            Radio One
          </label>
          <label>
            <input name="requiredRadio" type="radio" value="two" />
            <span></span>
            Radion Two
          </label>
        </div>
        <textarea name="equal" placeholder="equal field with required"></textarea>
        <br />
        <input name="email" placeholder="email field" />
        <br />
        <input name="minLength" placeholder="min length field" />
        <br />
        <input name="maxLength" placeholder="max length field" />
        <br />
        <input name="pattern" placeholder="pattern field: 'x-5'" />
        <br />
        <input name="numeric" placeholder="numeric field" />
        <br />
        <input name="decimal" placeholder="decimal field" />
        <br />
        <button type="submit">submit</button>
      </form>

      <p>
        Submitted: <code>{submitted ? 'true' : 'false'}</code>
      </p>

      <p>
        Form valid: <code>{valid ? 'true' : 'false'}</code>
      </p>

      <p>Form data:</p>
      <code style={{ display: 'inline-block', maxWidth: '600px' }}>{JSON.stringify(data).replace(/,/g, ', ')}</code>

      <p>Errors:</p>
      <code>{JSON.stringify(errors)}</code>
    </>
  );
};
