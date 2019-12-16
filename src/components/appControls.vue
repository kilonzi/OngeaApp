<template>
  <div>
    <div>
      <div class="columns is-mobile">
        <div class="column is-5">
          <div class="inline-div">
            <v-icon name="volume-up" class="is-large m-1"></v-icon>
            <span class="is-vcentered">Mute Audio</span>
          </div>
          <div class="inline-div">
            <v-icon name="video" class="is-large m-1"></v-icon>
            <span>Stop Video</span>
          </div>
        </div>
        <div class="column">
          <div class="inline-div">
            <v-icon name="desktop" class="is-large m-1"></v-icon>
            <span>Screen Share</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "controls",
  props: {
    connectId: String
  }
};
</script>
<style scoped>
.m-1 {
  margin: 1rem;
}
.m-2 {
  margin: 2rem;
}
.mb-2 {
  margin-bottom: 2rem;
}
.inline-div {
  display: inline-flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  margin: auto;
  padding-right: 0.5rem;
}
</style>