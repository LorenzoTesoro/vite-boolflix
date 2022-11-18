<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <div class="d-flex">
    <h1 class="text-uppercase">Boolfix</h1>
    <nav class="navbar navbar-expand-sm navbar-light">
      <div class="container">
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Serie TV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Film</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Originali</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Aggiunti di recente</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: rgb(210, 5, 5);
}
.nav-item {
  a {
    color: white;
  }
}
</style>
