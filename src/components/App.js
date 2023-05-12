import { useState } from "react";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Notification } from "./notification/Notification";
import { Section } from "./section/Section";
import { Statistics } from "./statistics/Statistics";

export const App = ()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ["good", "neutral", "bad"];

  const countTotalFeedback=()=>{
    return (good+bad+neutral)
  }

  const onLeaveFeedback = (buttonName) => {
    (buttonName==="good")&&(setGood(good+1));
    (buttonName==="neutral")&&(setNeutral(neutral+1));
    (buttonName==="bad")&&(setBad(bad+1));
  }

  const countPositiveFeedbackPercentage=(good)=>{
    if (good===0) {
      return 0;
    } else{
    return (100*good/countTotalFeedback()).toFixed(0)}
  }

  return (
      <Section title="">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
        {(countTotalFeedback===0) 
        ?  <Notification message="There is no feedback"/>
        : <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={Number(countPositiveFeedbackPercentage(good))}/>}
    </Section>
  );
}