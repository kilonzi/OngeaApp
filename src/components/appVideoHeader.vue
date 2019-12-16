<template>
  <div class="columns is-thin">
    <div class="column">
      <div class="brand-logo float-left">
        <brandLogo />
      </div>
    </div>
    <div class="column">
      <div class="float-center">
        <videoMount />
      </div>
    </div>
    <div class="column">
      <button @click="show_video" class="button is-primary float-right">
        Go Live
      </button>
    </div>
  </div>
</template>
<script>
import brandLogo from "./appBrandLogo";
import videoMount from "./appVideo";
export default {
  name: "videoHeader",
  components: {
    brandLogo,
    videoMount
  },
  methods: {
    // go_live() {
    //   var getUserMedia =
    //     navigator.getUserMedia ||
    //     navigator.webkitGetUserMedia ||
    //     navigator.mozGetUserMedia;
    //   getUserMedia(
    //     { video: true, audio: true },
    //     function(stream) {
    //       var call = peer.call(localStorage.getItem('connect_id'), stream);
    //       call.on("stream", function(remoteStream) {
    //           const vid =  getElementById('own-video')
    //           vid.setAttribute('src', remoteStream)
    //         // Show stream in some video/canvas element.
    //       });
    //     },
    //     function(err) {
    //       console.log("Failed to get local stream", err);
    //     }
    //   );
    // }

    show_video() {
      const video = document.querySelector("video");
      const constraints = {
        audio: false,
        video: true
      };
      function handleSuccess(stream) {
        window.stream = stream; // make stream available to browser console
        video.srcObject = stream;
      }

      function handleError(error) {
        console.log(
          "navigator.MediaDevices.getUserMedia error: ",
          error.message,
          error.name
        );
      }

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(handleSuccess)
        .catch(handleError);
    }
  }
};
</script>
<style scoped>
.is-thin{
  max-height: 80px !important;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
}
.brand-logo {
  height: 40px !important;
}
.float-right {
  float: right;
  position: relative;
  margin: auto;
}
.float-left {
  float: left;
  position: relative;
  justify-content: center;
  margin: auto;
}
.float-center {
  margin: auto;
  position: relative;
  left: 50%;
}
</style>
