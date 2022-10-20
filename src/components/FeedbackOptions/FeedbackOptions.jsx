import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
        <List>
            {options.map(key =>
                <li key={key}>
                    <Button
                        name={key}
                        onClick={(e) => onLeaveFeedback(key)}>{key}
                    </Button>
                </li>
            )}
        </List>
    </>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
