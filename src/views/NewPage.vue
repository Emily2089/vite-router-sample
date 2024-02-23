<template>
  <div class="row">
    <div class="col-4 list-group">
      <RouterLink to="/newpage/a" class="list-group-item list-group-item-action">A元件</RouterLink>
      <RouterLink to="/newpage/b" class="list-group-item list-group-item-action">B元件</RouterLink>
      <RouterLink to="/newpage/named-view/a2c" class="list-group-item list-group-item-action">
        命名視圖 - A元件和C元件
      </RouterLink>
      <RouterLink to="/newpage/named-view/c2b" class="list-group-item list-group-item-action">
        命名視圖 - C元件和B元件
      </RouterLink>
      <RouterLink
        to="/newpage/dynamic-router/5070926a4fd73301"
        class="list-group-item list-group-item-action"
      >
        動態路由 ($route)
      </RouterLink>
      <RouterLink
        to="/newpage/dynamic-router-by-props/5070926a4fd73301"
        class="list-group-item list-group-item-action"
      >
        動態路由 (props)
      </RouterLink>
    </div>

    <div class="col-8">
      <RouterView></RouterView>
    </div>
  </div>
</template>
