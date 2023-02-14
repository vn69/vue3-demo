import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const userAuth = ref({
    loggedIn: false,
    data: null,
  });
  const auth = getAuth();

  const signOutAuth = async () => {
    try {
      if (userAuth.value.loggedIn) {
        console.log("sign out");
        const response = await signOut(auth);
        userAuth.value = {
          loggedIn: false,
          data: null,
        };
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const signInAuth = (user) => {
    try {
      console.log("sign in");
      // console.log(user);
      userAuth.value = {
        loggedIn: true,
        data: user.user,
      };
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const checkIsLogin = () => {
    console.log("check is login");
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          userAuth.value = {
            loggedIn: true,
            data: user,
          };
        } else {
          userAuth.value = {
            loggedIn: false,
            data: null,
          };
        }
      });
    } catch (error) {
    }
  };

  onMounted(() => {
    checkIsLogin();
  });

  return { userAuth, signOutAuth, signInAuth, checkIsLogin };
});
