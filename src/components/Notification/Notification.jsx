import PropTypes from 'prop-types';
import { Text } from 'utilities/Text';

export const Notification = ({ message }) => {
  return (
    <div>
      <Text>{message}</Text>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
