import React, { FormEvent, useState } from 'react';

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

export const SetData = ({ validateOn = 'change' }: Props) => {
  const [loading, setLoading] = useState(false);
  const { ref, errors, data, valid, set, submitted, validate } = useForm<Form>(
    {
      firstName: ['', [required()]],
      lastName: ['', [required()]],
    },
    { validateOn },
  );

  function handleReset() {
    console.log('reset');
  }

  function handleSetData() {
    set({
      firstName: 'Some first name',
      lastName: 'Some last name',
    });
  }

  function handleAsyncSetData() {
    setLoading(true);
    setTimeout(() => {
      set({
        firstName: 'Async first name',
        lastName: 'Async last name',
      });
      setLoading(false);
    }, 1000);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // can do manual validation
    // const { valid, errors } = validate();
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} onReset={handleReset} method="post">
      <button type="button" onClick={handleSetData}>
        set data
      </button>
      <button type="button" onClick={handleAsyncSetData} style={{ marginLeft: 8 }} disabled={loading}>
        {loading ? 'loading data...' : 'set async data'}
      </button>
      <br />
      <br />
      <SimpleForm ref={ref} submitted={submitted} valid={valid} data={data} errors={errors} />
    </form>
  );
};
