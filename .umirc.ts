import path from 'path';
export default {
  npmClient: 'pnpm',
  apiRoute: {
    platform: 'vercel',
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  routes: [
    { exact: true, path: '/', component: 'main' },
    { exact: true, path: '/posts/create', component: 'posts/create' },
    { exact: true, path: '/login', component: 'login', layout: false },
    { exact: true, path: '/posts/:postId', component: 'posts/post' },
    { exact: true, path: '/posts/blogList', component: 'blogList' },
  ],
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {},
  proxy: {
    '/api': {
      target: 'http://192.168.100.168:8090',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
