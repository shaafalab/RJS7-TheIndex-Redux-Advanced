import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authors: [],
  filteredAuthors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHORS:
      return {
        ...state,
        authors: state.authors.concat(action.playload),
        filteredAuthors: state.filteredAuthors.concat(action.playload),
        loading: false
      };
    case actionTypes.FILTER_AUTHORS:
      return {
        ...state,
        filteredAuthors: state.authors.filter(author => {
          return `${author.first_name} ${author.last_name}`
            .toLowerCase()
            .includes(action.playload);
        })
      };
    default:
      return state;
  }
};

export default reducer;
