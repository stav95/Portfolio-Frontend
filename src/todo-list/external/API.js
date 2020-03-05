import axios from "axios";

export default class API {
  ddd() {}
}

export const getList = (list_name, callback) => {
  console.log("testtttt");
  axios({
    method: "POST",
    url: "/todo-list",
    data: {
      list_name: "s"
    }
  })
    .then(res => {
      console.log("RES - " + res);
      callback(res);
    })
    .catch(err => {
      console.log("ERR - " + err);
      callback(err);
    });

  // const params = new URLSearchParams();
  // params.append("list_name", list_name);

  // makeRequest("POST", "/todo-list", params, callback);
};

export const addNewItem = (list_name, new_item, callback) => {
  const params = new URLSearchParams();
  params.append("list_name", list_name);
  params.append("new_item", new_item);

  makeRequest("POST", "/todo-list-add-item", params, callback);
};

export const deleteItem = (list_name, item_id, callback) => {
  const params = new URLSearchParams();
  params.append("list_name", list_name);
  params.append("item_id", item_id);

  makeRequest("POST", "/todo-list-delete-item", params, callback);
};

export const changeCheckbox = (list_name, item_id, callback) => {
  const params = new URLSearchParams();
  params.append("list_name", list_name);
  params.append("item_id", item_id);

  makeRequest("POST", "/todo-list-update", params, callback);
};

function makeRequest(method, url, params, callback) {
  axios({
    method: method,
    url: url,
    data: params
  })
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
}
