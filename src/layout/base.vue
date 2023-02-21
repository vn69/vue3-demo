<template>
  <header class="w-100 d-flex justify-content-center">
    <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> | <RouterLink to="/cat-gpt">CatGPT</RouterLink> | <RouterLink to="/todo-list">Todo List</RouterLink> |
    <RouterLink to="/login" v-if="!authStore.userAuth.loggedIn">Login</RouterLink> | <RouterLink to="/register" v-if="!authStore.userAuth.loggedIn">Register</RouterLink> |
    <RouterLink to="/sign-out" v-if="authStore.userAuth.loggedIn">signOut</RouterLink> |
  </header>
  <slot></slot>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();

import { RouterLink } from "vue-router";
console.log("render layout base");
</script>
