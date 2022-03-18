<template>
  <div>
      {{getJuegosAndOpiniones}}
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
  computed:{
     ...mapGetters(["getJuegosAndOpiniones"]),
    ...mapState(["juegos"])
  }
}
</script>

<style>

</style>