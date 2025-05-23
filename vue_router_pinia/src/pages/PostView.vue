<template>
  <div class="post_block">
    文章 id: {{ $route.params.id }}
    <!-- <br> -->
    <!-- 接網址問號後面 -->
    <!-- {{ $route.query.page }} -->
    <button type="button" @click="cart.getData">執行 getData() 函式。計算屬性：{{ cart.buyCount }}</button>
  </div>
</template>

<script>
  import { useCartStore } from "@/stores/Cart.js";

  export default {
    data(){
      return {
        cart: useCartStore()
      };
    },
    mounted(){

      document.title = `文章 ${this.$route.params.id}`;

      // 監控 「路由的id」 有變的話
      this.$watch(
        () => this.$route.params.id,
        (newId, oldId) => {
          document.title = `文章 ${this.$route.params.id}`;
        }
      );
    }
  }
</script>

<!--
<script setup>
  import { onMounted, watch } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  
  onMounted(() => {
    document.title = `文章 ${route.params.id}`;
  });

  // 監控 「路由的id」 有變的話
  watch(() => route.params.id, (newId, oldId) => {
    document.title = `文章 ${route.params.id}`;
  });
</script>
-->

<style scoped>
  div.post_block{
    border: 2px solid red;
    color: red;
    font-size: 20px;
  }
</style>