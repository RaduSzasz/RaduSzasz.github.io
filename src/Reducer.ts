import { Reducer } from "redux";
import { CHANGE_PAGE, IChangePageAction } from "./Actions";
import { IApplicationState, Pages } from "./Types";

export const reducer: Reducer<IApplicationState, IChangePageAction> =
  (state: IApplicationState = { page: Pages.HOME }, action: IChangePageAction) => {
    switch(action.type) {
      case CHANGE_PAGE:
        return {
          ...state,
          page: action.page,
        };
      default:
        return state;
    }
  }