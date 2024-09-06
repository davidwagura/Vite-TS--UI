<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { authService } from '@/api/services/authService';
  import { RegisterUser } from '@/types/userTypes';
  
  export default defineComponent({
    name: 'Register',
    setup() {
      const name = ref('');
      const email = ref('');
      const password = ref('');
      const error = ref<string | null>(null);
  
      const register = async () => {
        const userData: RegisterUser = { name: name.value, email: email.value, password: password.value };
        try {
          const response = await authService.registerUser(userData);
          console.log('Registered user:', response.user);
        } catch (err) {
          error.value = err as string;
        }
      };
  
      return {
        name,
        email,
        password,
        error,
        register,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  