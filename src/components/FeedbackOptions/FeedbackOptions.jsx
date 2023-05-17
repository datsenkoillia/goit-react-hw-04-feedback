import PropTypes from 'prop-types';
import { Button, ButtonList } from './styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(btn => (
        <Button type="button" key={btn} onClick={() => onLeaveFeedback(btn)}>
          {btn}
        </Button>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
