<template>
  <div>
        <nav-bar></nav-bar>
        <menu-nav-bar></menu-nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/DefaultNavBar.vue';
import MenuNavBar from '@/components/navbar/MenuNavBar.vue';
export default {
    components: {
        NavBar,
        MenuNavBar
    }
}
</script>

<style>
    body{
        background-color: #fff;
    }
</style>