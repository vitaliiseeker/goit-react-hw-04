import { useState } from "react";
import { FeedbackOptions } from "../../components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "../../components/Statistics/Statistics";
import { Section } from "../../components/Section/Section";
import { Notification } from "../../components/Notification/Notification";

export const FeedbackPage = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = ["good", "neutral", "bad"];

  const onLeaveFeedback = (key) => {
    switch (key) {
      case "good":
        setGood(prevState => prevState + 1);
        break;

      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;

      case "bad":
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  }

  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => Math.round(good * 100 / total);
  const positivePercentage = countPositiveFeedbackPercentage();


  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} /> :
          <Notification message='There is no feedback' />}
      </Section>

    </>
  );
}