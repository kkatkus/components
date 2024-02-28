import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

import { Select } from '../components/Select';
import { Item } from 'react-stately';

const Styled = styled.div`
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;

`;
export default function SelectStory(): ReactElement {
  return (
    <Styled>
      <Select label="Favorite Animal">
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </Select>
    </Styled>
  );
}
