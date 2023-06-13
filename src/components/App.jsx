import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = e => {
    const option = e.target.name;

    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, num) => {
      return acc + num;
    }, 0);
  };

  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;

    return totalFeedback ? Math.ceil((goodFeedback / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const options = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleClickBtn} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
