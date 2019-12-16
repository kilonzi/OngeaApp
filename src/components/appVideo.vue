<template>
  <div>
    <div class="tile square-video">
      <video playsinline autoplay></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoMount",
  props: {
    caller: String
  }
};
</script>

<style scoped lang="less">
@square: 100px;
.square-video {
  height: @square;
  width: @square;
  border-radius: @square;
}
</style>
