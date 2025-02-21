import { SET_SEARCH_RESULTS, SET_SELECTED_SONG, TOGGLE_LIKE_SONG } from "../actions";

const initialState = {
  searchResults: [],
  selectedSong: null,
  likedSongs: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_SELECTED_SONG:
      return {
        ...state,
        selectedSong: action.payload,
      };
    case TOGGLE_LIKE_SONG:
      return {
        ...state,
        likedSongs: {
          ...state.likedSongs,
          [action.payload]: !state.likedSongs[action.payload],
        },
      };
    default:
      return state;
  }
};

export default reducer;
