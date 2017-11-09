import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import RecentPost from '@/components/RecentPost';
import DetailPost from '@/components/DetailPost';
import Register from '@/components/Register';
import Login from '@/components/Login';
import PostArticle from '@/components/PostArticle';
import EditArticle from '@/components/EditArticle';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: 'recent-post',
          component: RecentPost,
        },
        {
          path: '/post/:id',
          name: 'detail-post',
          component: DetailPost,
          props: true,
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
        },
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
        {
          path: '/post-article',
          name: 'post-article',
          component: PostArticle,
        },
        {
          path: '/edit-article/:id',
          name: 'edit-article',
          component: EditArticle,
          props: true,
        },
      ],
    },
  ],
});
