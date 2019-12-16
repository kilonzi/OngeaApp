<template>
  <div class="columns full-height">
    <div class="column is-primary is-2 has-background-info">
      <callers />
    </div>
    <div class="column is-secondary is-7 has-background-link"></div>
    <div class="column is-3">
     <messages/>
    </div>
  </div>
</template>
<script>
import callers from "../components/appListCallers";
import messages from '../components/appMessageList'
export default {
  name: "videoContainer",
  components: {
    callers,
    messages
  }
};
</script>
<style scoped>
.full-height {
  height: 70vh;
}
</style>
