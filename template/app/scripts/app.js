import Vue from 'vue';
import App from './App.vue';
// Import resources
import VueRouter from 'vue-router';
import VueResource from 'Vue-resource';

// Import componets
import Home from './components/Home.vue';

// Apply Vue-resource and vue-router to vuw instance
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

// point routs to the components they should use
router.map({
  '/home': {
    component: Home,
  }
});

// Any invalid route take them home
router.redirect({
  '*': '/home',
});

router.start(App, '#app');
