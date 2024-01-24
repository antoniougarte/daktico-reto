<template>
    <div class="ruta">
      <div class="container">
        <div class="componentes">
          <!-- Sección de cursos -->
          <div class="cursos">
            <div v-for="curso in cursos" :key="curso.id" class="curso">
              <div class="nombre">{{ curso.nombre }}</div>
              <div class="podio"></div>
              <div class="insignia"></div>
            </div>
          </div>
  
          <!-- Sección de puntajes -->
          <div class="puntajes">
            <div v-for="curso in cursos" :key="curso.id" class="puntaje">
              <div class="punto"></div>
              <div class="puntos">{{ curso.puntaje }}</div>
            </div>
          </div>
  
          <!-- Sección de trayectoria -->
          <div class="trayectoria">
            <div class="trayecto">
              <div class="hitos">
                <template  v-for="curso in cursos" :key="curso.id">
                    <div
                        class="hito"
                    >
                    <div class="avance">
                        <div class="background"></div>
                        <div class="texto">{{ curso.avance }}</div>
                    </div>
                    <div v-if="curso.avance === '100%'" class="estado">
                        <div class="background"></div>
                        <div class="icon"></div>
                    </div>
                    </div>
                </template>
              </div>
              <div class="progreso">
                <div class="barra" :style="{ width: anchoBarra }"></div>
                <div class="punta"  :style="{ left: posicionPunta }"></div>
              </div>
            </div>
            <div class="menumento"></div>
          </div>
  
          <!-- Sección de inicio -->
          <div class="inicio"></div>
        </div>
        <!-- Otras secciones según sea necesario -->
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { computed } from 'vue';

  const cursos = [
    { id: 1, nombre: "Matriz IPERC", avance: "100%", puntaje: 300 },
    { id: 2, nombre: "Riesgo y seguridad en instalaciones", avance: "100%", puntaje: 600 },
    { id: 3, nombre: "Claves para brindar primeros auxilios", avance: "100%", puntaje: 0 },
    { id: 4, nombre: "Prevenir el hostigamiento sexual en mi entorno", avance: "100%", puntaje: 0 },
    { id: 5, nombre: "Matriz IPERC", avance: "100%", puntaje: 0 },
    { id: 6, nombre: "Riesgo y seguridad en instalaciones", avance: "100%", puntaje: 0 },
    { id: 7, nombre: "Claves para brindar primeros auxilios", avance: "0%", puntaje: 0 },
    { id: 8, nombre: "Prevenir el hostigamiento sexual en mi entorno", avance: "0%", puntaje: 0 },
  ];

    const cursosCompletos = computed(() => cursos.filter(curso => curso.avance === '100%'));
    const anchoBarra = computed(() => `calc(var(--medida-xs) * 8 * ${cursosCompletos.value.length +1})`);
    const posicionPunta = computed(() => `calc(calc(var(--medida-xs) * 4) * ${cursosCompletos.value.length +1} - var(--medida-xs))`);
</script>

<style scoped>
.barra {
    width: var(--medida-xs);
    left: var(--posicion-punta);
}
</style>