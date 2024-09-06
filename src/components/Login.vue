<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { authService } from '../api/services/authService';
  import { LoginUser } from '../types/userTypes';
  
  export default defineComponent({
    name: 'Login',
    setup() {
      const email = ref('');
      const password = ref('');
      const error = ref<string | null>(null);
  
      const login = async () => {
        const userData: LoginUser = { email: email.value, password: password.value };
        try {
          const response = await authService.loginUser(userData);
          console.log('Logged in user:', response.user);
          console.log('Token:', response.token);
        } catch (err) {
          error.value = err as string;
        }
      };
  
      return {
        email,
        password,
        error,
        login,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  