import React from "react";
import PropTypes from 'prop-types';
import { StatisticsBox, StatisticsTitle, StatisticsValue, PositivePercentage } from "../Statistics/Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positiveFeedbackPercentage}) => {
    return (
        <StatisticsBox>
        <StatisticsTitle>Statistics</StatisticsTitle>
        {
        Object.entries({good, neutral, bad, total}).map(([key, value]) => (
        <StatisticsValue key={key}>{key}: {value}</StatisticsValue>))
        }
        <PositivePercentage>Positive feedback: {positiveFeedbackPercentage}%</PositivePercentage> 
       </StatisticsBox>
)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.string.isRequired
}

