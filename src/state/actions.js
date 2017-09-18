import types from './types';

export const addCard = (id) => ({
  type: types.ADD_CARD,
  payload: id
});

export const setCurrentCard = (id) => ({
	type: types.SET_CURRENT_CARD,
	payload: id
});

export const selectOption = (id, key) => ({
	type: types.SELECT_OPTION,
	payload: key+"-"+id
});

export const goBack = () =>({
  type: types.GO_BACK
});
