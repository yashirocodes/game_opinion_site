<template>
  <div>
    <div class="container my-5">
      <div class="accordion" id="accordionExample">
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
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h6>Opinion creada por : {{ opinion.opinion.usuario.nombre }} - Para el juego : {{opinion.juego.name}}</h6> 
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
             <div>
               <p>Opinión : {{opinion.opinion.descripcion}}</p>
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
  },
};
</script>

<style>
</style>