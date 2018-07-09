import { Action } from "redux";
import { Pages } from "./Types";

export const CHANGE_PAGE = "CHANGE_PAGE";
export type CHANGE_PAGE = typeof CHANGE_PAGE;

export interface IChangePageAction extends Action {
  page: Pages;
  type: CHANGE_PAGE;
}

export function changePage(page: Pages): IChangePageAction {
  return {
    page,
    type: CHANGE_PAGE,
  };
}