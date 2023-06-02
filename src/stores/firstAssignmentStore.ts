import { defineStore } from 'pinia';
import { useAuthStore } from './authStore'

export const useFirstAssignmentStore = defineStore('first-assignment-store', {
  state: () => ({
  }),
  getters: {
    auth() : any {
        const authStore = useAuthStore();
        return authStore;
    },
    authURL(){
        return `https://github.com/login/oauth/authorize?scope=user&client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_AUTHORIZE}`;
    },
  },
  actions: {
    async initAssignment(){
        const { token, login, currentRepo } = this.auth();
      return await fetch(`${import.meta.env.VITE_BACKEND}/first/init`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            token,
            user: login,
            repo: currentRepo
        })
      }).then((result) => {
        return result.json()
      }).then((body) => {
        console.log("Successfully initialized", body);
      });
    }, 
  },
})