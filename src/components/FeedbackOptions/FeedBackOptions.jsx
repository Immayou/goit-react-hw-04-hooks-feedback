import React from "react";
import PropTypes from 'prop-types';

import { FeedbackBox, ButtonValue } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
       return (
       <FeedbackBox>
           {options.map((option) => (
           <ButtonValue key={option} onClick={() => onLeaveFeedback(option)}>{option}</ButtonValue>
           ))}
       </FeedbackBox>
   )
   }

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired        
    }