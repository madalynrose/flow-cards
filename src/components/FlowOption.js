import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import * as ntw from 'number-to-words';

const FlowOption = ({ handleClick, isSelected, disabled, numOptions, index, value, isFirstCard }) => {

  let numOptionsAsWords = ntw.toWords(numOptions);
    
  let buttonClassName = "one-of-"+numOptionsAsWords;
  
  let keyClass= index+"-"+value
  
  let selected = "";
  if(isSelected) {
    selected = <span className="star-icon"></span>
  }

  return (
    <Button className={keyClass+" "+buttonClassName} disabled={disabled} onClick={() => handleClick(value, index)}>{selected}{index}</Button>
  );
    
};

FlowOption.propTypes = {
  cardInfo: PropTypes.shape({
    text: PropTypes.string,
    description: PropTypes.string,
    outcomes: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }),
  addCard: PropTypes.func,
};

export default FlowOption