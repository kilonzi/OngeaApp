<template>
  <div class="home">
    <brandLogo />
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
  </div>
</template>

<script>
// @ is an alias to /src
import brandLogo from "@/components/appBrandLogo.vue";

export default {
  name: "home",
  components: {
    brandLogo
  }
};
</script>
