<template>
  <div class="container">
    <h1>login</h1>
    <form>
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
};
</script>
