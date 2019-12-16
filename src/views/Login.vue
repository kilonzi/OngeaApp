<template>
  <div>
    <div class="columns is-mobile is-centered is-vcentered">
      <div class="column is-4 is-centered">
        <div class="card pb-4 pt-4 is-mobile width-40">
          <brandLogo />
          <h3 class="mb-4">Connecting People</h3>
          <div class="google-btn mt-8 mb-4" @click="login">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p class="btn-text">
              <b>Sign in with Google</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import brandLogo from "@/components/appBrandLogo.vue";
import firebase from "firebase";
import router from "../router";
import store from "../store";
var provider = new firebase.auth.GoogleAuthProvider();
export default {
  name: "Login",
  components: {
    brandLogo
  },
  methods: {
    // Log the user in
    login() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
          console.log(token, user);
          firebase.analytics().logEvent("User Logged In");
          store.commit({
            type: "set_new_connect_id",
            user_name: user.displayName,
            user_email: user.email,
            user_token: token
          });
          router.push("connect");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log(errorCode, errorMessage, email, credential);
        });
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
<style lang="less">
@white: #fff;
@google-blue: #4285f4;
@button-active-blue: #1669f2;
.width-40 {
  width: 40%;
  min-width: 400px;
}
.mt-8 {
  margin-top: 8rem;
}
.mb-4 {
  margin-bottom: 4rem;
}
.pb-4 {
  padding-bottom: 4rem;
}
.pt-4 {
  padding-top: 4rem;
}
.min-300 {
  min-width: 300px;
}
.google-btn {
  width: 240px;
  height: 42px;
  background-color: @google-blue;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  left: 20%;
  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: white;
  }
  .google-icon {
    position: relative;
    margin-top: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    position: relative;
    left: 25px;
    top: 11px;
    margin: 11px 11px 0 0;
    color: white;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
  &:hover {
    box-shadow: 0 0 6px @google-blue;
  }
  &:active {
    background: @button-active-blue;
  }
}
</style>
