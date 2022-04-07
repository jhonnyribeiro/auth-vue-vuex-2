<template>
  <div class="container">
    <div class="jumbotron mt-2">
      <h1 class="display-4">Bem-vindo!</h1>
      <button class="btn btn-danger" @click="efetarLogout()">Sair</button>
      <p>Aplição disponível para listagem dos gerentes do nosso banco.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    efetarLogout() {
      // localStorage.removeItem("token");
      this.$store.commit("DESLOGAR_USUARIO");
      this.$router.push({ name: "usuario.entrar" });
    },
  },
};
</script>
