import { defineStore } from 'pinia';
import { useAuthStore } from './authStore'

export const useFirstAssignmentStore = defineStore('first-assignment-store', {
  state: () => ({
    error: null,
    success: false
  }),
  getters: { 
    auth() : any {
        const authStore = useAuthStore();
        return authStore;
    },
    canSeeAssignment(): boolean {
      return true; // TODO
    }
  },
  actions: {
    async doCheck(){

    }
  },
})