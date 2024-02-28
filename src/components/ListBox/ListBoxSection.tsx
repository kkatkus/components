import React from 'react';

import { useListBoxSection } from '@react-aria/listbox';
import { ListState } from 'react-stately';
import type { Node } from "@react-types/shared";
import styled from '@emotion/styled';

import ListBoxOption from './ListBoxOption';

interface Props {
  section: Node<unknown>;
  state: ListState<unknown>;
}
export default function ListBoxSection({ section, state }: Props) {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"]
  });

  return (
    <>
      <li {...itemProps} className="pt-2">
        {section.rendered && (
          <span
            {...headingProps}
            className="text-xs font-bold uppercase text-gray-500 mx-3"
          >
            {section.rendered}
          </span>
        )}
        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <ListBoxOption key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}
