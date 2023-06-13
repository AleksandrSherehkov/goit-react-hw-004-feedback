import PropTypes from 'prop-types';
import { Box } from 'Box';
import { Text } from 'Text';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box mt={5} width="350px" gridGap={4} flexDirection="column" as="ul">
      <li>
        <Text color="good">
          Good: <span>{good}</span>
        </Text>
      </li>
      <li>
        <Text>
          Neutral: <span>{neutral}</span>
        </Text>
      </li>
      <li>
        <Text color="bad">
          Bad: <span>{bad}</span>
        </Text>
      </li>
      <li>
        <Text color="red" fontSize="xl">
          Total: <span>{total}</span>
        </Text>
      </li>
      <li>
        <Text color="button">
          Positive feedback:
          <span> {positivePercentage + '%'}</span>
        </Text>
      </li>
    </Box>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
