import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = label => {
    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    if (good === 0) {
      return 0;
    }
    return Math.ceil((good * 100) / (good + neutral + bad));
  };

  render() {
    const feedbacks = this.state;
    const totalFeedbacks = this.countTotalFeedback(feedbacks);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(feedbacks)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title={'Statistic'}>
          {totalFeedbacks !== 0 && (
            <Statistics
              good={feedbacks.good}
              neutral={feedbacks.neutral}
              bad={feedbacks.bad}
              total={totalFeedbacks}
              positivePercentage={this.countPositiveFeedbackPercentage(
                feedbacks
              )}
            />
          )}
          {totalFeedbacks === 0 && (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
