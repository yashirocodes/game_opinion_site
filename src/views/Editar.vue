<template>
  <div>
    <div v-if="!opinion">No existe una opinión con este ID</div>
    <div v-else>
      <h1 class="text-center my-4">Editando la opinion del juego</h1>
      <div class="container">
        <div class="form">
          <div>
            <label class="form-label">Usuario</label>
            <input class="form-control" v-model="opinion.usuario.nombre" />
          </div>
          <div>
            <label class="form-label">Descripcion</label>
            <textarea
              class="form-control"
              v-model="opinion.descripcion"
            ></textarea>
          </div>
          <div class="mt-3">
            <button class="btn btn-success" @click="modificarOpinion">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  methods: {
    ...mapActions(["modificar_Opinion"]),
    modificarOpinion() {
      const { opinion } = this;
      this.modificar_Opinion(opinion);
      this.$router.push("/administracion");
    },
  },
  computed: {
    ...mapGetters(["getOpinionById"]),
    opinion() {
      try {
        const { id } = this;
        return {
          ...this.getOpinionById(+id),
          usuario: { ...this.getOpinionById(+id).usuario },
        };
      } catch (error) {
        return undefined;
      }
    },
  },
};
</script>

<style>
</style>