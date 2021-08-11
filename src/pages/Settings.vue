<template>
  <Main>
    <Sidebar />
    <div class="pad">
      <Settings />
    </div>
  </Main>
</template>

<script>
import Settings from "../components/Settings/Main.vue";
import Sidebar from "../components/Sidebar.vue";
import Main from "../layout/Main.vue";
export default {
  components: { Main, Sidebar, Settings },
};
</script>

<style></style>
