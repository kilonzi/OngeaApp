<template>
  <div>
    <div class="vertical-list">
      <ul>
        <li v-for="(caller,index) in callers" v-bind:key="caller">{{index }},{{caller.id }},{{caller.name }}</li>
      </ul>
    </div>
    <div class="vertical-list">
      <ul>

      </ul>
    </div>
  </div>
</template>
<script>
import store from "../store";
export default {
  name: "callers",
  data() {
    return {
      callers: [
        { id: "1", name: "John Kame" },
        { id: "2", name: "Jane Kusi" },
        { id: "3", name: "Jane Kusi" },
        { id: "4", name: "Jane Kusi" },
        { id: "5", name: "Jane Kusi" },
        { id: "6", name: "Jane Kusi" },
        { id: "7", name: "Jane Kusi" }
      ],
      metas:[
          { id: "1", name: store.state.user_name}
      ]
    };
  }
};
</script>
<style scoped>
li {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
</style>

