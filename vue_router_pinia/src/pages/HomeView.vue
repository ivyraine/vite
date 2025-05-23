<template>
  <div class="page_block">
    <h1>Home 頁面(HomeView.vue 元件)</h1>

    <button type="button" @click="cart.addData">執行 addData() 函式</button>
  </div>
</template>

<script>
  import { useCartStore } from "@/stores/Cart.js";

  export default {
    data(){
      return {
        cart: useCartStore()
      };
    }
  }
</script>

<style scoped>
  div.page_block{
    border: 2px solid blue;
    color: blue;
  }
</style>