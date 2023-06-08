import { defineStore } from 'pinia';
import { useAuthStore } from './authStore'

export const useAssignmentStore = defineStore('assignment-store', {
  state: () => ({
    error: null,
    success: false,
    checking: false,
    currentTask: 1
  }),
  getters: { 
    auth() : any {
        const authStore = useAuthStore();
        return authStore;
    },
    canSeeAssignment(): boolean {
      return true; // TODO
    },
    async checkStatus(){

    },
    async checkAssignment(){
      return await fetch(`${import.meta.env.VITE_BACKEND}/init_check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${this.auth.token}`
        },
        body: JSON.stringify({
          taskId: 1,
          accept: "json"
        })
      }).then((result) => {
        if (result.status !== 200) {
          throw new Error(result.json());
        }
        return result.json()
      });
    }, 
  },
  actions: {
    async doCheck(){

    }
  },
})