<template>
  <router-link :to="route">
    <i class="fa-solid fa-angle-left"></i>
  </router-link>
</template>

<script>

export default {
  name: "BackButton",
  props:{
    route: { type: String, default() { return "/"}}
  }
}
</script>