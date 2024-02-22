<template>
  <div>
    動態路由
  </div>
</template>

<script>
export default {
  mounted() {
    this.$http.get('https://randomuser.me/api/')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
