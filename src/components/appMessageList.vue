<template>
  <div>
    <ul class="messages-list">
      <li v-for="message in messages" :key="message">
        <div v-if="message.from === '1'" class="notification text-others is-primary box">
          <img  class="profile-image" src="https://via.placeholder.com/50" alt />
          <p class="is-size-6">{{message.message}}</p>
          <p class="is-size-7">
            <i><b>{{message.date}}</b></i>
          </p>
        </div>
        <div v-else class="notification text-mine is-info box is-outlined">
          <img class="profile-image" src="https://via.placeholder.com/50" alt />
          <p class="is-size-6">{{message.message}}</p>
          <p class="is-size-7">
           <i><b>{{message.date}}</b></i>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "messages",
  data() {
    return {
      messages: [
        { from: "1", message: "I love1 you", date: "2019-12-16 16:00" },
        { from: "2", message: "I love2 you", date: "2019-12-16 16:10" },
        { from: "1", message: "I love3 you", date: "2019-12-16 16:20" },
        { from: "2", message: "I love4 you", date: "2019-12-16 16:30" },
        { from: "3", message: "I love5 you", date: "2019-12-16 16:40" },
        { from: "1", message: "I love6 you", date: "2019-12-16 17:00" },
        { from: "2", message: "I love7 you", date: "2019-12-16 17:10" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@len:3rem;
.profile-image{
    width: @len;
    width:@len;
    border-radius: @len/2;
    position: relative;
}
.text-mine {
  text-align: right;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border-bottom-left-radius: 1rem;
}
.text-others {
  text-align: left;
  padding-top: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-top-right-radius: 1rem;
}
.messages-list {
  max-height: 60vh;
  overflow-y: scroll;
}
</style>