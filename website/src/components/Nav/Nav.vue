<template>
    <div class="bg-gray-800">
      <nav class="container-fluid px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-xl font-bold text-white md:text-2xl hover:text-blue-400">
            Logo
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <transition name="slide-down">
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x- md:mt-0">
            <router-link 
            to="/" @click.native="closeMobileMenu"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Home
        </router-link>
        <router-link 
            to="/about" @click.native="closeMobileMenu"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            About
        </router-link>
        <router-link 
            to="/services" @click.native="closeMobileMenu"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Services
        </router-link>   
        <router-link 
            to="/portfolio" @click.native="closeMobileMenu"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Portfolio
        </router-link>     
        <router-link 
            to="/expertise" @click.native="closeMobileMenu"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Expertise
        </router-link>        
        <router-link 
            to="/contact" @click.native="closeMobileMenu"
            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Contact
        </router-link>
        </ul>
        </transition>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },  
    methods: {
    closeMobileMenu() {
      this.showMenu = false;
    }
  }  
  };
  </script>
  

  