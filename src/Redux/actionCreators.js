import GO_TO_PAGE from "./actionTypes";
import PAGE_TITLES from "./constants";

export function goToPage(page) {
  return { 
    type: GO_TO_PAGE, 
    payload: PAGE_TITLES[page]
  }
}