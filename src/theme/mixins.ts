import { css } from '@emotion/react';
import { theme, Size } from './theme';

export function fieldMixin({ size, isOpen }: { size: Size; isOpen?: boolean }) {
  if (isOpen) {
    return css`
      font-size: ${theme.typography.labels[size].fontSize};
      padding: calc(${theme.interactive.padding[size][0]} - ${theme.interactive.border.width[size]})
        calc(${theme.interactive.padding[size][1]} - ${theme.interactive.border.width[size]});
      border: solid ${theme.interactive.border.width[size]} ${theme.pallete.primary.light};
      border-radius: ${theme.interactive.border.radius[size]};
      background-color: white;
    `;
  }

  return css`
    font-size: ${theme.typography.labels[size].fontSize};
    padding: ${theme.interactive.padding[size][0]} ${theme.interactive.padding[size][1]};
    border: none;
    border-radius: ${theme.interactive.border.radius[size]};
    background-color: #eeeeee;
  `;
}
