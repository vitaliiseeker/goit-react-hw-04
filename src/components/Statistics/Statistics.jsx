import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <List>
            <li key="good" >
                <p >Good: {good}</p>
            </li>
            <li key="neutral">
                <p >Neutral: {neutral}</p>
            </li>
            <li key="bad" >
                <p >Bad: {bad}</p>
            </li>
            <li key="total" >
                <p >Total: {total}</p>
            </li>
            <li key="positivePercentage" >
                <p >Positive feedback: {positivePercentage}%</p>
            </li>
        </List>
    </>
)

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}
