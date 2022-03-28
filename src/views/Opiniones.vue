<template>
  <div>
    {{getJuegosAndOpiniones}}
    <div v-if="existenOpiniones" class="container my-3">
      <div class="alert alert-danger text-center">
        <h5>
          <i class="bi bi-exclamation-circle"></i> No hay Opiniones para mostrar
        </h5>
      </div>
    </div>
    <div class="container my-5" >
      <div class="accordion" id="accordionExample" >
        <div
          class="accordion-item"
          v-for="(opinion, i) of getJuegosAndOpiniones"
          :key="i"
        >
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse-${opinion.opinion.id}`"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h6>
                Opinion creada por : {{ opinion.opinion.usuario.nombre }} - Para
                el juego : {{ opinion.juego.name }}
              </h6>
            </button>
          </h2>
          <div
            :id="`collapse-${opinion.opinion.id}`"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div>
                <p>Opinión : {{ opinion.opinion.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getJuegosAndOpiniones"]),
    ...mapState(["juegos"]),
    existenOpiniones() {
      return !this.getJuegosAndOpiniones.length;
    },
  },
};
</script>

<style>
</style>