<!--<script>-->
<!--import Layout from "./pages/Layout.vue";-->
<!--export default {-->
<!--  components: {Layout}-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <layout/>-->
<!--</template>-->

<!--<style>-->
<!--/*#app {*/-->
<!--/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/-->
<!--/*  -webkit-font-smoothing: antialiased;*/-->
<!--/*  -moz-osx-font-smoothing: grayscale;*/-->
<!--/*  text-align: center;*/-->
<!--/*  color: #2c3e50;*/-->
<!--/*  margin-top: 60px;*/-->
<!--/*}*/-->
<!--</style>-->
<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(store.dispatch('setting/fetchSiteSetting'));
</script>

<template>
  <router-view />
</template>

<style></style>
