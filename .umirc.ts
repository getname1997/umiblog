
import path from 'path'
export default {
  npmClient: 'pnpm',
  apiRoute: {
    platform: 'vercel'
  },
  alias:{
    '@': path.resolve(__dirname, 'src'),
  },
  routes: [
    { exact: true, path: '/', component: 'main' },
    { exact: true, path: '/posts/create', component: 'posts/create' },
    { exact: true, path: '/login', component: 'login' },
    { exact: true, path: '/posts/:postId', component: 'posts/post' },
  ],
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {}
};
