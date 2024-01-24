<script setup lang="ts">
import RutaComponent from '@/components/RutaComponent.vue';
import MenuRutasComponent from '@/components/MenuRutasComponent.vue';

</script>

<template>
        <div class="daktico">
            <div class="rutas">
                <div class="escena">
                    <div id="particles-js" class="particulas">
                    </div>
                    <div class="primer-plano"></div>
                    <div class="segundo-plano"></div>
                    <div class="tercer-plano"></div>
                    <div class="fondo"></div>
                </div>
                <div class="lienzo">
                    <!------------------------------------------------------------------------------- ** HEADER ------------------------- -->
                    <header class="header">
                        <div class="usuario">
                            <button class="btn miniavatar">
                                <div class="shine"></div>
                                <div class="miniavatar-img miniavatar-1"></div>
                                <div class="sombrafondomarco"></div>
                                <div class="fondomarco"></div>
                                <div class="marcointerior"></div>
                                <div class="marcoexterior"></div>
                                <div class="fondomarco"></div>
                            </button>
                            <div class="nombreyapellido">Juan Perales Robles</div>
                            <div class="fondousuario"></div>
                        </div>
                        <!------------------------------------------------------------------------------- ** NAVBAR ------------------------- -->
                        <nav class="navbar">
                            <div class="nav-item">
                                <button class="btn inicio">
                                    <div class="btn-nav-nombre">Inicio</div>
                                    <div class="btn-nav-icono material-icons">home</div>
                                </button>
                            </div>
                            <div class="nav-item">
                                <button class="btn salir">
                                    <div class="btn-nav-nombre">Salir</div>
                                    <div class="btn-nav-icono material-icons">exit_to_app</div>
                                </button>
                            </div>
                        </nav>
                        <!------------------------------------------------------------------------------ ** ESTADÍSTICAS ------------------------- -->
                        <sidebar class="estadisticas">
                            <button class="btn estadistica puntos">
                                <div class="btn-estadistica-imagen">
                                    <div class="shine"></div>
                                    <div class="punto-img"></div>
                                </div>
                                <div class="btn-estadistica-nombre">Puntos</div>
                                <div class="btn-estadistica-valor">350</div>
                                <div class="btn-estadistica-fondo"></div>
                            </button>
                            <button class="btn estadistica insignias">
                                <div class="btn-estadistica-imagen">
                                    <div class="shine"></div>
                                    <div class="insignia-img"></div>
                                </div>
                                <div class="btn-estadistica-nombre">Insignias</div>
                                <div class="btn-estadistica-valor">3</div>
                                <div class="btn-estadistica-fondo"></div>
                            </button>
                            <button class="btn estadistica ranking openRankingCurso">
                                <div class="btn-estadistica-imagen">
                                    <div class="shine"></div>
                                    <div class="trofeo-img"></div>
                                </div>
                                <div class="btn-estadistica-nombre">Ranking</div>
                                <div class="btn-estadistica-valor">3500</div>
                                <div class="btn-estadistica-fondo"></div>
                            </button>
                            <button class="btn estadistica galardones">
                                <div class="btn-estadistica-imagen">
                                    <div class="shine"></div>
                                    <div class="galardon-img"></div>
                                </div>
                                <div class="btn-estadistica-nombre">Galardones</div>
                                <div class="btn-estadistica-valor">350</div>
                                <div class="btn-estadistica-fondo"></div>
                            </button>
                        </sidebar>
                    </header>
                    <!------------------------------------------------------------------------------ ** ARTICLE ------------------------- -->
                    <main class="main">
                        <!----------------------------------------------------------------- RUTA ------------------------- -->
                        <div class="box-simple">
                            <div class="container">
                                <MenuRutasComponent />
                                <router-view />
                            </div>
                        </div>
                    </main>
                    
                </div>
                <!--------------------------------------------- MODALES OJO en vue funciona como componente de cierta vista------------------------- -->

            </div>
        </div>
</template>
