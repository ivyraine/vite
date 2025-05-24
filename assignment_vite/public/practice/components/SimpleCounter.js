export default {
    props: ["text"], //標籤上的屬性可以用text
    template: `
    <button type = "button" @click="plusOne" class = "btn_counter">{{text}}:{{counter}}</button>    
    `,
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        plusOne() {
            this.counter++;
        }
    }
}