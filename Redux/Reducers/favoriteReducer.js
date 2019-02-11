// Store/Reducers/favoriteReducer.js

const initialState = { token: '' }

function toggleFavorite(state = initialState, action) {
	let nextState
	switch (action.type) {
		case 'TOGGLE_FAVORITE': {
					nextState = {
						...state,
						token: action.value
					}
				}
/* 		case 'CURRENT_MODULE': {
					nextState = {
						...state,
						token: action.value
					}
				} */
		return nextState
		
		default:
			return state
		}
	}
	

export {toggleFavorite};
export default toggleFavorite;