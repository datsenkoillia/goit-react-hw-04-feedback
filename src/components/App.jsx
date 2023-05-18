import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = label => {
    if (label === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (label === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (label === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const feedbacks = { good, neutral, bad };
  const totalFeedbacks = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    }
    return Math.ceil((good * 100) / totalFeedbacks);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title={'Statistic'}>
        {totalFeedbacks !== 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
        {totalFeedbacks === 0 && (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
