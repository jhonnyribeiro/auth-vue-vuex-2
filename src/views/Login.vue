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
    };
  },
  methods: {
    login() {
      this.$http
        .post("auth/login", this.usuario)
        .then((response) => {
          console.log(response);
          // localStorage.setItem("token", response.data.access_token);
          // this.$store.token = response.data.access_token;
          // this.$store.usuario = response.data.user;
          this.$store.commit("DEFINIR_USUARIO_LOGADO", {
            token: response.data.access_token,
            usuario: response.data.user,
          });
          this.$router.push({ name: "gerentes" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
