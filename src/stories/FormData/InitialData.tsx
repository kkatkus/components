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
 * Set initial form data
 */
export const InitialData = ({ validateOn = 'change' }: Props) => {
  const { ref, errors, data, valid, submitted } = useForm<Form>(
    {
      firstName: ['first name', [required()]],
      lastName: ['last name', [required()]],
    },
    { validateOn },
  );

  function handleReset() {
    console.log('handleSubmit');
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('handleSubmit');
    // can do manual validation
    // const { valid, errors } = validate();
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} onReset={handleReset} method="post">
      <SimpleForm ref={ref} submitted={submitted} valid={valid} data={data} errors={errors} />
    </form>
  );
};
