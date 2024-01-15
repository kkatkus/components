import React, { FormEvent } from 'react';

import { useForm } from '../../useForm';
import { required } from '../../validators';

import { SimpleForm } from './SimpleForm';

import './../styles.css';

interface Props {
  /**
   * How should validation trigger
   */
  validateOn?: 'change' | 'blur' | 'submit';
}

interface Form {
  firstName: string;
  lastName: string;
}

/**
 * Reset form data
 */
export const ResetData = ({ validateOn = 'change' }: Props) => {
  const { ref, errors, data, valid, submitted } = useForm<Form>(
    {
      firstName: ['first', [required()]],
      lastName: ['last', [required()]],
    },
    { validateOn },
  );

  function handleReset() {
    console.log('reset');
  }

  function handleSet() {}

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // can do manual validation
    // const { valid, errors } = validate();
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} onReset={handleReset} method="post">
      <SimpleForm ref={ref} valid={valid} submitted={submitted} data={data} errors={errors} />
    </form>
  );
};
