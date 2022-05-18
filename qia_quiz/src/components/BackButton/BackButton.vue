<template>
  <router-link :to="route" class="my-3">
    <button type="button" class="btn btn-primary btn-sm">
      <i class="fa-solid fa-angle-left"></i>
      Voltar
    </button>
  </router-link>
</template>

<script>
export default {
  name: "BackButton",
  props: {
    route: {
      type: String,
      default() {
        return "/";
      },
    },
  },
};
</script>
