/* 存放api */
const login = {
  login: '/auth/login',
};

const Daily = {
  dailyList: '/dailyList',
};

// 博客博客
const Blog = {
  getBlogList: '/posts/findAll',
};

const api = {
  ...login,
  ...Daily,
  ...Blog,
};

export default api;
