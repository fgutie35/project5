<template>
  <nav class="bg-purple-900 h-20 items-center text-white flex justify-center space-x-6">
    <RouterLink :to="{name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{name: 'Other'}">Other</RouterLink>

    <RouterLink :to="{name: 'SettingsPage'}">Settings</RouterLink>   
     
      <div v-if="isAuthenticated">
        Welcome {{ user.email }}
        <button @click="logout" class="rounded-md bg-red-500 px-4 py-2 mx-2 text-red-100 hover:bg-red-700">LOGOUT</button>
      </div>
      <div v-else>
            <RouterLink :to="{name: 'LoginPage'}">Login</RouterLink>
      </div>
      <label class="text-white flex space-x-6 font-bold">Login (Email: stcadmin@stc.com | Password: 123456!)</label>

  </nav>
</template>



<!-- <style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style> -->


<script setup>
import { useAuth } from '../composables/useAuth'
const { isAuthenticated, logout, user } = useAuth()

</script>