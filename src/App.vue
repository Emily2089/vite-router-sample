<script>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: '新增頁面' }" class="nav-link">新增頁面</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container" style="height: 300vh;">
    <RouterView />
    <RouterLink to="/newpage/router-navigation">路由導覽</RouterLink>
  </div>
</template>

<style lang="scss">
@import './assets/all.scss';
body {
  padding-top: 80px;
}
</style>
