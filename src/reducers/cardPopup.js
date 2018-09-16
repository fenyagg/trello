import {OPEN_CARD_POPUP, CLOSE_CARD_POPUP, SAVE_CARD_POPUP} from './../actions/cardPopup';
import update from 'react-addons-update';
import initialState from "../data/initialState";

export default function cardPopup( store = {}, action) {
	console.log(store);
	console.log('cardPopup dispatch action', action);

	switch (action.type){
		case OPEN_CARD_POPUP:
			return update(store, {
				columnIndex: { $set: action.payload.columnIndex },
				cardIndex: { $set: action.payload.cardIndex },
				isOpen: { $set: true },
			});
		case CLOSE_CARD_POPUP:
			return update(store, {
				columnIndex: { $set: -1 },
				cardIndex: { $set: -1 },
				isOpen: { $set: false },
			});
		case SAVE_CARD_POPUP:
			return update(store, {
				columnIndex: { $set: -1 },
				cardIndex: { $set: -1 },
				isOpen: { $set: false },
			});
		default:
			return store;
	}


}