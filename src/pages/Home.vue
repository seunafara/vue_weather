<template>
  <Main>
    <Sidebar />
    <Index />
  </Main>
</template>

<script>
import Index from "../components/Home/Index.vue";
import Sidebar from "../components/Sidebar.vue";
import Main from "../layout/Main.vue";
export default {
  components: { Main, Sidebar, Index },
};
</script>

<style></style>
