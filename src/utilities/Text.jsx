import styled, { css } from 'styled-components';
import { color, space, typography } from 'styled-system';

const capitalize = css`
  text-transform: capitalize;
`;

export const Text = styled('p')(
  color,
  typography,
  space,
  ({ capitalizeFirstLetter }) => capitalizeFirstLetter && capitalize
);

Text.defaultProps = {
  fontFamily: 'title',
  fontSize: 'l',
  color: 'text',
  capitalizeFirstLetter: true,
};
