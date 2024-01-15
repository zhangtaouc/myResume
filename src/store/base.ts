import { defineStore } from 'pinia'

 export const useBaseStore = defineStore({
   id: 'base', // id必填，且需要唯一
   state: () => {
     return {
       title: '这是store'
     }
   },
   actions: {
     updateTitle(title) {
       this.title = title
     }
   }
 })
