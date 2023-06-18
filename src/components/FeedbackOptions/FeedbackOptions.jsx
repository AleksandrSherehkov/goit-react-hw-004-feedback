import PropTypes from 'prop-types';
import { Box } from 'utilities/Box';
import { ButtonStyled } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box mt={5} width="300px" justifyContent="space-between" as="ul">
      {options.map(option => (
        <li key={option}>
          <ButtonStyled type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </ButtonStyled>
        </li>
      ))}
    </Box>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
