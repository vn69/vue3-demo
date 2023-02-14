<template>
  <div class="w-50 m-auto p-5">
    <h4 class="text-center mb-3">Login Page</h4>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password" show-password />
      </el-form-item>
      <div class="text-center">
        <div>
          <el-button @click="onSubmit" type="primary">Login</el-button>
          <router-link class="mx-2" to="/register">register</router-link>
          <button @click.prevent="loginWithGoogle">Login with google</button>
        </div>
        <div class="text-danger" v-if="errorMessage">{{ errorMessage }}</div>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

// do not use same name with ref
const form = reactive({
  email: "",
  password: "",
});
const errorMessage = ref("");
const router = useRouter();
const authStore = useAuthStore();

const onSubmit = () => {
  if (!form.email || !form.password) {
    errorMessage.value = "Email or Password is not blank!";
    return;
  }
  errorMessage.value = "";
  loginUser(form);
  console.log("submit!");
};

const loginUser = async (form) => {
  try {
    const response = await signInWithEmailAndPassword(getAuth(), form.email, form.password);
    authStore.signInAuth(response);
    router.push("/about");
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
  }
};

const loginWithGoogle = () => {
  const provide = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provide)
    .then((result) => {
      console.log(result.user);
      router.push("/about");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
