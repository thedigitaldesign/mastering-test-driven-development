import * as constants from "../actions/constants";

const rBalance = (state = 0, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    default:
      return state;
  }
};

export default rBalance;
