import { defineStore } from "pinia";

export const useCartStore = defineStore("Cart", {
  // data
  state(){
    return {
      products: [
        {
          id: "a",
          count: 1
        },
        {
          id: "b",
          count: 2
        }
      ]
    }
  },
  // computed
  getters: {
    buyCount(){
      return this.products.length;
    }
  },
  // methods
  actions: {
    getData(){ // 印出產品的 id
      this.products.forEach((item, i) => {
        console.log(item.id);
      });
    },
    addData(){ // 新增新的產品物件
      this.products.push({
        id: "t" + Date.now(),
        count: 1
      });
    }
  }
});