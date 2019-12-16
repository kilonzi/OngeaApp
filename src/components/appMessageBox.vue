<template>
  <div>
    <div class="columns is-mobile">
      <div class="column is-12">
        <div class="inline-div">
          <textarea
            class="textarea chatarea"
            type="text"
            placeholder="Type your message"
            rows="2"
          ></textarea>
          <button class="button send-button is-white">
            <v-icon name="paper-plane"></v-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "messageBox"
};
</script>
<style scoped>
::placeholder {
  position: relative;
  left: 10px;
  margin-left: 15px;
}
.send-button {
  margin: 0;
  cursor: pointer;
  position: relative;
  height: 70px;
}
.chatarea {
  max-width: 260px !important;
  min-width: 260px !important;
  position: relative;
}
.pulled-right {
  float: right;
}
.pulled-left {
  float: left;
}
.clearfix {
  overflow: auto;
}
.inline-div {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}
</style>
