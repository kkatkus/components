import React from 'react';
import styled from '@emotion/styled';

import { Pallete, theme } from '../theme';
import { ReactElement } from 'react';
import { mostReadable } from '../theme/pallete';

const Styled = styled.div`
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  display: grid;
  gap: 48px;
  grid-template-columns: 1fr 1fr 1fr;

  .item {
    display: flex;
    align-items: center;
    label {
      width: 120px;
      font-size: 14px;
      strong {
        display: block;
      }
    }
  }
  .pal {
    display: block;
    width: 120px;
    height: 18px;
    font-size: 14px;
    margin: 0 8px 8px 0;
    padding: 8px;
    border: 1px solid black;
  }
`;
export default function PalleteStory(): ReactElement {
  return (
    <Styled>
      {Object.keys(theme.pallete).map((p) => (
        <div>
          <h3>{p}</h3>
          {Object.entries(theme.pallete[p as keyof Pallete] as object).map(([color, val]) => (
            <div className="item">
              <label>{color}</label>
              <div className="pal" style={{ backgroundColor: String(val), color: mostReadable(String(val)) }}>
                {String(val)}
              </div>
            </div>
          ))}
        </div>
      ))}
    </Styled>
  );
}
