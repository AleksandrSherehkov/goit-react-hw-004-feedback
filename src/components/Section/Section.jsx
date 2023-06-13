import PropTypes from 'prop-types';
import { Box } from 'Box';
import { Text } from 'Text';

export const Section = ({ title, children }) => {
  return (
    <Box
      m="40px auto"
      py={5}
      width="700px"
      flexDirection="column"
      borderRadius="normal"
      boxShadow="normal"
      bg="primary"
      as="section"
    >
      {title && (
        <Text color="black" fontWeight="bold" as="h2">
          {title}
        </Text>
      )}
      {children}
    </Box>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.node,
};
