<template>
  <div>
    動態路由
  </div>
</template>

<script>
export default {
  created() {
    const seed = this.$route.params.id;
    this.$http.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res);
    });
  },
};
</script>
