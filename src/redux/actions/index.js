export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";
export const TOGGLE_LIKE_SONG = "TOGGLE_LIKE_SONG";

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const setSelectedSong = (song) => ({
  type: SET_SELECTED_SONG,
  payload: song,
});

export const toggleLikeSong = (songId) => ({
  type: TOGGLE_LIKE_SONG,
  payload: songId,
});
