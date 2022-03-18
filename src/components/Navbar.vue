<template>
  <div>
    <section>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="logo-site" src="../assets/img/logo.png" alt="" />
            GameExperience</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex me-4" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Inicio <i class="bi bi-house"></i> </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/opiniones"
                  >Opiniones <i class="bi bi-chat"></i> </router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/administracion"
                  >Administracion <i class="bi bi-person-circle"></i></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.logo-site {
  width: 2.5rem;
}
.flex{
    justify-content: end;
}
.nav-link{
    font-size: 1.5rem;
}
</style>