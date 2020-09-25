const wordReducerDefaultState = {
  activeWord: null,
  words: [],
  wordResults: [],
  history: [],
};

export default (state = wordReducerDefaultState, action) => {
  switch (action.type) {
    case 'MAKE_SEARCH':
      // console.log(action);
      return {
        ...state,
        wordResults: action.payload.word_results,
        // history: [...history, ]
      };
    case 'GET_WORD_DATA':
      return {
        ...state,
        activeWord: action.payload.word_details,
        words: [...state.words, action.payload.word_details],
        history: [...history, action.payload.word_details],
      };
    default:
      return state;
  }
};
