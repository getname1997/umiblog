interface apiType {
  [name: string]: string;
}
/* 存放api */
const planApi: apiType = {};
const login: apiType = {};

const Common: apiType = {};
const enumUrl: apiType = {};

const api: apiType = {
  ...Common,
  ...planApi,
  ...login,
  ...enumUrl,
};

export default api;
