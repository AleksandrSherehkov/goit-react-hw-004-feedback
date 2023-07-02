import PropTypes from 'prop-types';
import { Box } from 'utilities/Box';
import { Text } from 'utilities/Text';

export const Statistics = ({ total, positivePercentage, state }) => {
  return (
    <Box mt={5} width="350px" gridGap={4} flexDirection="column" as="ul">
      {state.map(([name, value]) => (
        <li key={name}>
          <Text color={name}>
            {name}: <span>{value}</span>
          </Text>
        </li>
      ))}
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

Statistics.propTypes = {
  total: PropTypes.number.isRequired,

  positivePercentage: PropTypes.string.isRequired,
  state: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
};
