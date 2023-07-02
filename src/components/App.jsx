import { useReducer } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { GlobalStyle } from 'utilities/GlobalStyle';
import { initialState, reducer } from 'reducers/reducer';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClickBtn = ({ target: { name } }) => {
    dispatch({ type: 'increment', payload: name });
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, num) => {
      return acc + num;
    }, 0);
  };

  const countPositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
    const { good } = state;
    return totalFeedback ? Math.ceil((good / totalFeedback) * 100) : 0;
  };

  const options = Object.keys(state);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClickBtn} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            state={Object.entries(state)}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
};
