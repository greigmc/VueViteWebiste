<template>
    <div class="bg-black">
      <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
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
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
            <router-link 
            to="/"
            class="text-sm font-bold text-white hover:text-blue-400">
            Home
        </router-link>
        <router-link 
            to="/about"
            class="text-sm font-bold text-white hover:text-blue-400">
            About
        </router-link>
        <router-link 
            to="/services"
            class="text-sm font-bold text-white hover:text-blue-400">
            Services
        </router-link>   
        <router-link 
            to="/portfolio"
            class="text-sm font-bold text-white hover:text-blue-400">
            Portfolio
        </router-link>     
        <router-link 
            to="/expertise"
            class="text-sm font-bold text-white hover:text-blue-400">
            Expertise
        </router-link>        
        <router-link 
            to="/contact"
            class="text-sm font-bold text-white hover:text-blue-400">
            Contact
        </router-link>

        </ul>
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
  };
  </script>
  