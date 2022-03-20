<template>
  <div>
    <div class="container my-3">
      
      <!-- <div class="alert alert-danger text-center" role="alert">
        
       <h5><i class="bi bi-exclamation-circle"></i>  No hay Opiniones para mostrar</h5>
      </div> -->
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Juego</th>
            <th>Opinion</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({ opinion, juego }, i) in getJuegosAndOpiniones" :key="i" > 
            <td>{{ opinion.id }}</td>
            <td>{{ opinion.usuario.nombre }}</td>
            <td>{{ juego.name }}</td>
            <td>{{ opinion.descripcion }}</td>
            <td>
              <button
                class="btn btn-warning"
                @click="irAEditarOpinion(opinion.id)"
              >
                Editar
              </button>
              <button
                class="btn btn-danger ms-2"
                @click="eliminar_Opinion(opinion.id)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return{
      table: true,
      alert: true
    }
  },
  computed: {
    ...mapGetters(["getJuegosAndOpiniones"]),
  },
  methods: {
    ...mapActions(["eliminar_Opinion"]),
    irAEditarOpinion(id) {
      this.$router.push(`/editar/${id}`);
    },
  },
};
</script>

<style>
</style>