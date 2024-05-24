// src/router/index.js
import { createWebHistory, createRouter } from 'vue-router';
import Home from './../pages/Home.vue'; // Import your Home component
import About from './../pages/About.vue'; // Import your About component
import Services from './../pages/Services.vue'; // Import your Home component
import Portfolio from './../pages/Portfolio.vue'; // Import your About component
import Expertise from './../pages/Expertise.vue'; // Import your Home component
import Contact from './../pages/Contact.vue'; // Import your Home component


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },  {
    path: '/expertise',
    name: 'Expertise',
    component: Expertise,
  },  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  }, 
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
