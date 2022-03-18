<template>
  <div class="home">
    <GamesView/>
  </div>
</template>

<script>
import GamesView from "../components/GamesView.vue"
import { mapActions } from "vuex";
export default {
  name: 'Home',
  components:{
    GamesView,
  },
  methods: {
    ...mapActions(["get_Juegos"]),
  },
  
}
</script>
