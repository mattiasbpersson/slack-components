<template>
  <v-card>

    <v-card-title class="message-header">
      <span class="display-name">{{message.createdBy.displayName}}</span>
      <span class="message-time">{{new Date(message.createdAt).toLocaleString('en-SE')}}</span>
    </v-card-title>

    <v-card-text class="message-text-wrapper">
      <span class="message-text">{{message.text}}</span>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: 'TextMessageViewer',
  props: {
    message: Object
  }
}
</script>

<style scoped>

  .display-name {
    font-weight: bold;
  }

  .message-time {
    margin-left: 1rem;
    opacity: 0.5;
  }

  .message-header {
    padding-bottom: 0;
  }

  .message-text-wrapper {
    padding-top: 0;
  }

  .message-text {
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
</style>
