<template>
  <div class="w-50 m-auto p-5">
    <h4 class="text-center mb-3">Register Page</h4>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" show-password />
      </el-form-item>
      <div class="text-center">
        <div>
          <el-button @click="onSubmit" type="primary">Register</el-button>
          <router-link class="ms-2" to="/login">login</router-link>
        </div>
        <div class="text-danger" v-if="errorMessage">{{ errorMessage }}</div>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useRouter} from "vue-router"

// do not use same name with ref
const form = reactive({
  email: "",
  password: "",
});
const errorMessage = ref("");
const router = useRouter()

const onSubmit = () => {
  if (!form.email || !form.password) {
    errorMessage.value = "Email or Password is not blank!";
    return;
  }
  errorMessage.value = "";
  createUser(form)
  console.log("submit!");
};

const createUser = async (form) => {
  try {
    const response = await createUserWithEmailAndPassword(getAuth(), form.email, form.password);
    console.log(response)
    router.push("/login")
  } catch (error) {
    errorMessage.value = error.message
  } finally {
  }
};
</script>
