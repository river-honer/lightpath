<template>
  <v-container v-if="messages.length > 0">
    <v-alert
    v-for="message in messages"
    v-model="message.display"
    :key="message.key"
    :type="message.type"
    :dismissible="true"
    >
      {{ message.content }}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'alerts',
  props: {
    messages: {
      type: undefined,
    },
  },
};
</script>
