import React, { ReactElement } from 'react';
import { Input, InputType } from '../components/Input';
import { Select } from '../components/Select';
import { Item } from 'react-stately';
import { Size } from '../theme';

interface Props {
  type: InputType;
  size: Size;
  isDisabled: boolean;
}
export default function AllStory({type, size, isDisabled}: Props): ReactElement  {
  return (<>
    <Input type={type} size={size} isDisabled={isDisabled} />
    <br />
    <Select style={{marginTop: 8, width: 200 }} size={size} isDisabled={isDisabled}>
      <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
    </Select>
  </>)
}
