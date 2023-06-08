import { defineStore } from 'pinia';
import { useAuthStore } from './authStore'

export const useAssignmentStore = defineStore('assignment-store', {
  state: () => ({
    error: null,
    success: false,
    checking: false,
    activeTask: 1,
    loading: true
  }),
  getters: { 
    auth() : any {
        const authStore = useAuthStore();
        return authStore;
    },
  },
  actions: {
    async doCheck(){

    },
    async checkStatus(){
      return await fetch(`${import.meta.env.VITE_BACKEND}/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${this.auth.token}`
        },
      }).then((result) => {
        this.loading = false;
        if (result.status !== 200) {
          this.success = false;
          this.error = true;
          throw new Error(result.json());
        }
        this.success = true;
        return result.json()
      }).then(body=>{
        this.activeTask = body.activeTask;
      });
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
})