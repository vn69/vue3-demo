<template>
  <div class="w-50 m-auto p-5">
    <h4 class="text-center mb-3">Sign Out Page</h4>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
const router = useRouter();

const { signOutAuth } = useAuthStore();

watchEffect(async () => {
  console.log("sign out");
  signOutAuth();
  router.push("/");
});
</script>
