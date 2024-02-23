<template>
  <div>
    動態路由搭配 Props
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
  created() {
    console.log(this);
    const seed = this.id;
    this.$http.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res);
    });
  },
};
</script>
