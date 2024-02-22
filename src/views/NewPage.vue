<template>
  <div class="row">
    <div class="col-4 list-group">
      <RouterLink to="/newpage/a" class="list-group-item list-group-item-action">A元件</RouterLink>
      <RouterLink to="/newpage/b" class="list-group-item list-group-item-action">B元件</RouterLink>
    </div>

    <div class="col-8">
      <RouterView></RouterView>
    </div>
  </div>
</template>
