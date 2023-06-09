import { defineStore } from 'pinia';
import { useAuthStore } from './authStore'

const NUMBER_OF_TASKS = 5;

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
    canDoNextTask(){
      return this.success && this.activeTask < NUMBER_OF_TASKS;
    }
  },
  actions: {
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
      this.checking = true;
      return await fetch(`${import.meta.env.VITE_BACKEND}/init_check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${this.auth.token}`
        },
        body: JSON.stringify({
          taskId: this.activeTask,
          accept: "json"
        })
      }).then((result) => {
        this.checking =  false;
        return result.json();
      }).then((result)=>{
        result = {"repo":"git@github.com:kris48k/git_2.git","taskId":1,"result":true,"details":{"successCommits":5}};
        debugger;
        if (result.message) {
          this.error = result.message;
        } else if (result){
          this.success = true;
        }
      }).catch(err => {
        this.error = "Что-то пошло не так, попробуйте позже"
      });
    },
    nextTask(){
      if (this.canDoNextTask) {
        this.activeTask++;
        this.error = null;
        this.success = false;
      }
    }
  },
})