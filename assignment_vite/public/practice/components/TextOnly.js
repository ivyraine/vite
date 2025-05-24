export default {
    props: ["greetMsg"],

    template: `
      <p>{{ greetMsg }}這是 TextOnly 元件的段落文字</p>
    `,
    mounted(){
      console.log(this.greetMsg); // 可使用 this.greetMsg 及以下的 template
    }
  }