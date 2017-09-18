import React, { PropTypes } from 'react';
import FlowOption from './FlowOption'

const FlowOptions = ({ options, addCard, setCurrentCard, selectOption, isFirstCard, selectedOptions, isCurrentCard, cardId, goBack }) => {
  let keys = [];
  if(options) keys = Object.keys(options);
  
  const handleClick = (id, key) => {
    addCard(id);
    setCurrentCard(id);
    selectOption(id, key);
  }
  

  let numOptions = keys.length;
  if(!isFirstCard) numOptions+=1;
    
  let flowOptions = [];
  if(keys.length > 0){
    flowOptions = keys.map((key) =>
    {
      const keyClass =  key+"-"+options[key];
      const isSelected = selectedOptions.indexOf(keyClass)!==-1;
      return (
        <FlowOption
          key={keyClass}
          index={key}
          value={options[key]}
          isSelected={isSelected}
          disabled={!isCurrentCard}
          handleClick={handleClick.bind(this)}
          numOptions={numOptions}
        />
      );
    });
  }

  if(!isFirstCard){
    flowOptions.push(
      <FlowOption
        key={cardId+"-back"}
        index="Back"
        value=""
        isSelected={false}
        disabled={!isCurrentCard}
        handleClick={goBack}
        numOptions={numOptions}
      />
    );
  }
                                        
  return (
    <div className="options">
      {flowOptions}
    </div>
  );
    
};

FlowOptions.propTypes = {
  cardInfo: PropTypes.shape({
    text: PropTypes.string,
    description: PropTypes.string,
    outcomes: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }),
  addCard: PropTypes.func,
};

export default FlowOptions