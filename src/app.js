import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";
import { HOME_PAGE_LINK, ABOUT_PAGE_LINK, GALLARY_PAGE_LINK, LESSON_PAGE_LINK, CONTACT_PAGE_LINK, LOGIN_PAGE_LINK, SIGN_PAGE_LINK, ERROR_PAGE_LINK } from "./services/domService.js";

HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
GALLARY_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.GALLARY));
LESSON_PAGE_LINK.addEventListener("click",()=> onChangePage(PAGES.LESSON ))
CONTACT_PAGE_LINK.addEventListener("click",()=> onChangePage(PAGES.CONTACT ))
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
SIGN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.SIGN));
