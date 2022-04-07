<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.stop.prevent="login()">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="usuario.email"
        />
      </div>

      <div class="form-group">
        <label for="senha">Senha</label>
        <input
          type="password"
          class="form-control"
          id="senha"
          v-model="usuario.password"
        />
      </div>

      <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p>

      <button type="submit" class="btn btn-primary">Entrar</button>
      <hr />
      <router-link :to="{ name: 'usuario.novo' }" class="mt-5"
        >Cadastrar</router-link
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
      mensagemErro: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("efetuarLogin", this.usuario)
        .then(() => {
          this.$router.push({ name: "gerentes" });
          this.mensagemErro = "";
        })
        .catch((erro) => {
          if (erro.request.status === 401) {
            this.mensagemErro = "Usuário ou senha inválidos";
          } else {
            this.mensagemErro = "Erro ao efetuar login";
          }
        });
    },
  },
};
</script>
