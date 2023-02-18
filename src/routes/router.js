import PAGES from "../models/pageModel.js";
import { HOME_PAGE, ABOUT_PAGE, GALLARY_PAGE, LESSON_PAGE, CONTACT_PAGE, LOGIN_PAGE, SIGN_PAGE, ERROR_PAGE } from "../services/domService.js";

export const onChangePage = (page) => {
    HOME_PAGE.className = "d-none";
    ABOUT_PAGE.className = "d-none";
    GALLARY_PAGE.className = "d-none";
    LESSON_PAGE.className = "d-none";
    CONTACT_PAGE.className = "d-none";
    LOGIN_PAGE.className = "d-none";
    SIGN_PAGE.className = "d-none";
    ERROR_PAGE.className = "d-none";
    if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
    if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
    if (page === PAGES.GALLARY) return (GALLARY_PAGE.className = "d-block");
    if (page === PAGES.LESSON) return (LESSON_PAGE.className = "d-block");
    if (page === PAGES.CONTACT) return (CONTACT_PAGE.className = "d-block");
    if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");
    if (page === PAGES.SIGN) return (SIGN_PAGE.className = "d-block");
    return ERROR_PAGE.className = "d-block";
}