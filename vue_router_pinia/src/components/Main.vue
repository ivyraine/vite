<template>
  <div class="main_block">
    <h1>這是 Main 元件</h1>

    <ul>
      <li><RouterLink to="/">首頁(RouterLink)</RouterLink></li>
      <li><RouterLink to="/about">關於我們(RouterLink)</RouterLink></li>
      
      <li><RouterLink to="/post/1">文章 1(RouterLink)</RouterLink></li>
      <li><RouterLink to="/post/2">文章 2(RouterLink)</RouterLink></li>
      
      <li><a href="/tjd101/g1/">首頁(a tag)</a></li>
      <li><a href="/tjd101/g1/about">關於我們(a tag)</a></li>
    </ul>

    <h2>頁面網址：{{ $route.fullPath }}</h2>
    <RouterView></RouterView>
    <!-- <footer>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Hz2F_S3Tl0Y?si=9T8Ci067pH_wjI7T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </footer> -->
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  div.main_block{
    border: 2px solid black;
  }
  div.main_block h1{
    margin: 0;
  }
</style>