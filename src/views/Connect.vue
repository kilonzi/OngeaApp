<template>
  <div>
    <div class="container is-fluid">
      <videoHeader />
      <videoContainer />
      <div class="columns">
        <div class="column is-primary is-2">
        </div>
        <div class="column is-secondary is-7">
          <controls />
        </div>
        <div class="column is-info is-3">
          <messageBox />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import controls from "../components/appControls";

import messageBox from "../components/appMessageBox";
import videoContainer from "../components/appVideoContainer";
import videoHeader from "../components/appVideoHeader";
import store from "../store";
export default {
  name: "connect",
  data() {
    return {
      connect_id: store.state.connect_id
    };
  },
  components: {
    controls,
    messageBox,
    videoContainer,
    videoHeader
  },
  created() {
    const peer = new Peer();
    peer.on("open", function(id) {
      store.commit({
        type: "set_new_connect_id",
        connect_id: id
      });
      this.connect_id = id;
      localStorage.setItem("connect_id", id);
      console.log("My peer ID is: " + id);
    });
  }
};
</script>
