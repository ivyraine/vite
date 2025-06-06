<script setup>
fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
    //   .then(json => console.log(json))
      .then(data => {
        console.log(`文章標題: ${data.title}`);
        console.log(`文章內容: ${data.body}`);
      })

</script>