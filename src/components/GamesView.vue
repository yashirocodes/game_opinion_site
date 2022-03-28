<template>
  <div>
    <div class="container">
      <div class="galeria">
        <h1 class="text-center my-4">Lista de Juegos Disponibles</h1>

        <div class="row">
          <div class="col-12 col-lg-3" v-for="(juego, i) in juegos" :key="i">
            <div class="card">
              <img class="card-img-top" :src="juego.background_image" alt="" />
              <div class="card-body">
                <h5 class="card-title">{{ juego.name }}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Rating: {{ juego.rating }}</li>
                <li class="list-group-item">
                  Lanzamiento: {{ juego.released }}
                </li>
                <li class="list-group-item">
                  Actualizacion: {{ juego.updated }}
                </li>
              </ul>
              <div class="card-footer d-flex justify-content-center">
                <button
                  @click="gameSelected = juego.id"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Opinar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div>
              <h4>
                Agregar una opinion para el juego {{ juegoSelected.name }}
              </h4>
              <hr />
              <div>
                <label class="form-label">Nombre</label>
                <input
                  v-model="opinion.usuario.nombre"
                  class="form-control"
                  type="text"
                />
              </div>
              <div>
                <label class="form-label">Opinion</label>
                <textarea
                  v-model="opinion.descripcion"
                  class="form-control"
                ></textarea>
              </div>
              <div class="my-2">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="agregarOpinion"
                  class="btn btn-primary"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "GamesViews",
  data() {
    return {
      gameSelected: null,
      opinion: {
        usuario: {
          nombre: "",
        },
        descripcion: "",
      },
    };
  },
  methods: {
    ...mapMutations(["AGREGAR_OPINIONES"]),

    agregarOpinion() {
      const { gameSelected } = this;
      const opinion = {
        ...this.opinion,
        usuario: { ...this.opinion.usuario },
      };

      opinion.idJuego = gameSelected;
      opinion.id = Math.floor(Math.random() * 999);
      this.AGREGAR_OPINIONES(opinion);

      this.opinion.usuario = { nombre: "" };
      this.opinion.descripcion = "";
    },
  },
  computed: {
    ...mapState(["juegos", "opiniones"]),
    ...mapGetters(["getJuegosAndOpiniones", "getJuegoById"]),
    juegoSelected() {
      const { gameSelected } = this;
      return this.getJuegoById(gameSelected) || {};
    },
  },
};
</script>

<style>
</style>