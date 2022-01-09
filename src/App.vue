<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SideBar from "./components/SideBar.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <div class="container">
      <SideBar></SideBar>
      <Main></Main>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import "./styles/normal.scss";
@import "./styles/fontello.scss";

.container {
  display: flex;
  align-items: stretch;
  margin: 10px auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  width: 1060px;
  overflow: hidden;
  border-radius: 4px;
}
</style>
