import { API_SERVER } from "config";

const ENDPOINT = {
  API: `${API_SERVER}/api`,
};
const ERROR_MESSAGE = {
    ITEM_GET: "Request to get detail failed:",
    ITEM_DELETE: "Request to delete list item failed:",
    ITEM_ADD: "Request to add item failed:",
    LIST_GET: "Request to get list items failed:",
  };
  
export{ ENDPOINT, ERROR_MESSAGE };
