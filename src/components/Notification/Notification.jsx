import PropTypes from 'prop-types';
import { Text } from 'utilities/Text';

export const Notification = ({ message }) => {
  return (
    <div>
      <Text>{message}</Text>
    </div>
  );
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
