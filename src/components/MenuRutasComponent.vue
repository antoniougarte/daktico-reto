<template>
  <div class="menu-rutas">
    <button class="btn-triangle-left rutas-showLeft btn ml-l mr-l"></button>
    <div class="listado-rutas">
      <RouterLink
        class="router-link-decoration"
        :class="{ 'router-link': true, 'ruta-item': true, 'activo': $route.path === '/', 'inactivo': $route.path !== '/' }"
        to="/" exact>
        Ruta SSOMA<span class="cursos-pendientes">1</span>
      </RouterLink>

      <RouterLink
        class="router-link-decoration"
        :class="{ 'router-link': true, 'ruta-item': true, 'inactivo': $route.path !== '/onboarding', 'activo': $route.path === '/onboarding' }"
        to="/onboarding">
        Onboarding
      </RouterLink>

      <RouterLink
        class="router-link-decoration"
        :class="{ 'router-link': true, 'ruta-item': true, 'inactivo': $route.path !== '/seguridad', 'activo': $route.path === '/seguridad' }"
        to="/seguridad">
        Seguridad de la información <span class="cursos-pendientes">12</span>
      </RouterLink>
    </div>
    <button class="btn-triangle-right rutas-showRight btn ml-l mr-xl"></button>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.router-link-decoration{
  text-decoration: none;
}

</style>