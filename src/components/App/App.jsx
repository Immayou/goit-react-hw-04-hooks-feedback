import { useState} from "react";
import { Wrapper } from "./App.styled";
import { Section } from "components/Section/Section";
import { FeedbackOptions}  from "components/FeedbackOptions/FeedBackOptions";
import { Statistics } from 'components/Statistics/Statistics'
import { Notification } from 'components/Notification/Notification'

export const App = () => {
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)

 const data = {good, neutral, bad}

  const onHandlerFeedback = (option) => {
   switch (option) {
    case 'good':
      setGood(prevState => prevState + 1)
      break;
    case 'neutral':
      setNeutral(prevState => prevState + 1)
      break;
    case 'bad':
      setBad(prevState => prevState + 1)
      break;
    default:
      return
   }
  }

  const countTotalFeedback = () => {
  return Object.values(data).reduce((a, b) => (a+b), 0)
  }
  
  const countPositiveFeedbackPercentage = () => {
  return (good/countTotalFeedback()*100).toFixed(0)
  }
  
  const total = countTotalFeedback(); 

  return (
    <Wrapper>
      <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys(data)} onLeaveFeedback={onHandlerFeedback}/>
      {total > 0 ? 
      (<Statistics good={good} neutral={neutral} bad={bad} total={total} 
      positiveFeedbackPercentage={countPositiveFeedbackPercentage()}/>) :
      (<Notification message="There is no feedback"/>)}
      </Section>
    </Wrapper>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };
  
//   onLeaveFeedback = (option) => {
//     this.setState( prevState => ({[option]: prevState[option] + 1}))
//   }

//   countTotalFeedback() {
//   return Object.values(this.state).reduce((a, b) => (a+b), 0)
//   }
  
//   countPositiveFeedbackPercentage() {
//   return (this.state.good/this.countTotalFeedback()*100).toFixed(0)
//   }

//   render() {
//   const { good, neutral, bad } = this.state;
//   const total = this.countTotalFeedback();
  
//   return (
//     <Wrapper>
//       <Section title="Please leave feedback">
//       <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
//       {total > 0 ? 
//       (<Statistics good={good} neutral={neutral} bad={bad} total={total} 
//       positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}/>) :
//       (<Notification message="There is no feedback"/>)}
//       </Section>
//     </Wrapper>
//   );
// };
// };

// export default App;