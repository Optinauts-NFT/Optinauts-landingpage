import { combineReducers } from "redux";
import nfts from "./nfts";
import site from "./siteSettings";

export default combineReducers({ nfts, site });
