<template lang="pug">
  .page
    ntt-logo
    h1.mt-8 Hello Fellow Humans
</template>

<style lang="sass" scoped>
.page
  @apply flex flex-col justify-center items-center h-screen
</style>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api';

export default defineComponent({});
</script>
