import { defineStore } from 'pinia';
import router from '@/router';

export const useAuthStore = defineStore('auth-store', {
  state: () => ({
    token: null,
    login: null,
    name: null, 
    repositories: [],
    currentRepo: null,
  }),
  getters: {
    isLoggedIn(): boolean {
      return !!this.token;
    },
    authURL(){
        return `https://github.com/login/oauth/authorize?scope=user&client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_AUTHORIZE}`;
    },
  },
  actions: {
    initStore() {
        const auth = JSON.parse(localStorage.getItem("auth") || '{}') || {};
        const { login, name, token, currentRepo, repositories } = auth || {};
        if (token) {
          this.login = login;
          this.token = token;
          this.name = name;
          this.currentRepo = currentRepo;
          this.repositories = repositories;
        }

    }, 
    async authenticate(code: string){
      return await fetch(`${import.meta.env.VITE_BACKEND}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          code: code,
          accept: "json"
        })
      }).then((result) => {
        if (result.status !== 200) {
          throw new Error(result.json());
        }
        return result.json()
      }).then((body) => {
        localStorage.setItem("auth", JSON.stringify(body));
        this.initStore();
      })
    }, 
    async saveCurrentRepo(){
      return await fetch(`${import.meta.env.VITE_BACKEND}/save_repo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${this.token}`
        },
        body: JSON.stringify({
          repo: this.currentRepo,
          accept: "json"
        })
      }).then((result) => {
        if (result.status !== 200) {
          throw new Error(result.json());
        }
        return result.json()
      });
    }, 

    async initAssignment(){
      const { token, login, currentRepo } = this;
      return await fetch(`${import.meta.env.VITE_BACKEND}/first/init`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            token,
            user: login,
            repo: currentRepo.label
        })
      }).then((result) => {
        return result.json()
      }).then((body) => {
        console.log("Successfully initialized", body);
      });
  }, 
    saveStore(){
      const { login, token, name, currentRepo } = this;
      localStorage.setItem('auth', JSON.stringify({ 
        login, name, token, currentRepo
      }));
    },
    setCurrentRepo(repo: { label: string, value: string}) {
      this.currentRepo = repo;
      this.saveCurrentRepo();
      this.saveStore();
    }
  },
})