import React from 'react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { InputType } from './Input.d';

interface Props {
  type: InputType;
  showChars: boolean;
  onClick: () => void;
}
export default function SufixIcon({ type, showChars, onClick }: Props) {
  console.log('tt', type);
  if (type !== 'password') {
    return <></>;
  }
  return showChars ? <EyeSlashIcon className="eye" onClick={onClick} /> : <EyeIcon className="eye" onClick={onClick} />;
}
