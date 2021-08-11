<template>
  <div
    class="sidebar hidden lg:flex flex-col py-16 px-12 border-r-2 border-gray-50 min-h-screen"
  >
    <Logo />
    <div class="app-links mt-10 flex flex-col">
      <router-link to="/" class="menu-link">
        <i class="las la-home"></i>
        <p>Home</p>
      </router-link>
      <router-link to="/demoa" class="menu-link">
        <i class="las la-globe"></i>
        <p>Demo A</p>
      </router-link>
      <router-link to="/demob" class="menu-link">
        <i class="lar la-star"></i>
        <p>Demo B</p>
      </router-link>
      <router-link to="/add" class="menu-link">
        <i class="las la-plus"></i>
        <p>Location</p>
      </router-link>
      <router-link to="/settings" class="menu-link">
        <i class="las la-cog"></i>
        <p>Settings</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: { Logo },
};
</script>

<style></style>
