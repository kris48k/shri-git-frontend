import { defineStore } from 'pinia';
import { useAuthStore } from './authStore'
import router from '@/router';

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
      return this.success && (this.activeTask < NUMBER_OF_TASKS);
    },
    isHomeworkOver(){
      return (
        this.activeTask > NUMBER_OF_TASKS || (
        this.activeTask === NUMBER_OF_TASKS && this.success
      ))
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
          this.error = true;
          throw new Error(result.json());
        }
        return result.json()
      }).then(body=>{
        this.activeTask = body.activeTask;
        if (this.isHomeworkOver) {
          router.push('/finish');
        }
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
      }).then((response)=>{
        console.log('result', response?.result?.result);
        if (response.message) {
          this.success = false;
          this.error = response.message;
        } else if (response && response.result){
          this.success = response.result.result ;

          if (response.result.result){
            this.error = null;
          } else {
            this.error = 'Не все тесты прошли. Попробуйте еще раз проверить что все условия выполнены.';
          }
          if (this.isHomeworkOver) {
            router.push('/finish');
          }
        }
      }).catch(err => {
        console.log('e', err)
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
