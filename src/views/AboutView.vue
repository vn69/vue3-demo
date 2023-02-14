<template>
  <h1>{{ message }}</h1>
  <div>{{ authStore.userAuth.data && authStore.userAuth.data.email || "you are not login" }}</div>
  <h2>{{ counter.count}}</h2>
  <button @click="counter.increment()">Add</button>
  <ItemCount @add="count++" :count="count" :obj="obj"></ItemCount>
</template>

<script setup>

import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import {useCounterStore} from "../stores/counter" 
const counter = useCounterStore()

import ItemCount from "../components/ItemCount.vue";
const count = ref(0)
const obj = ref({a: 1, b: {c: 2}})


const authStore = useAuthStore();
const message = ref("Wellcome");
</script>
