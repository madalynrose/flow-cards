import React, { PropTypes } from 'react';
import { Card } from 'semantic-ui-react';
import FlowOptions from './FlowOptions'

const FlowCard = ({ cardInfo, addCard, setCurrentCard, isCurrentCard, goBack, chooseOutcome, selectOption, selectedOptions }) =>   {
    
  if(!cardInfo.description){
    cardInfo.description = "";
  }
                                
  return (
    <Card className={cardInfo.type}>
      <Card.Header>{cardInfo.text}</Card.Header>
        <Card.Content>
          <div className="description">{cardInfo.description}</div>
          <FlowOptions
            options={cardInfo.outcomes}
            addCard={addCard}
            setCurrentCard={setCurrentCard}
            isCurrentCard={isCurrentCard}
            goBack={goBack}
            cardId={cardInfo.key}
            isFirstCard={cardInfo.key===0}
            selectedOptions={selectedOptions}
            selectOption={selectOption}
          />
        </Card.Content>
    </Card>
  );
};

FlowCard.propTypes = {
  cardInfo: PropTypes.shape({
    text: PropTypes.string,
    description: PropTypes.string,
    outcomes: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }),
  addCard: PropTypes.func,
};

export default FlowCard