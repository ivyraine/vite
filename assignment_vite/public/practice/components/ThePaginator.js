export default {
    props: ["totalItems", "itemsPerPage", "currentPage"],
    template: `
        <div class="pagination_block" id="pagination_block">
            <ul class="pagination">
                <li v-if="currentPage!=1"><a href="#">&lt;</a></li>

                <li v-for="n in totalPages">
                <a href="#" :class ="{'-on': n==currentPage}">{{ n }}</a></li>

                <li v-if = "currentPage != totalPages"><a href="#">&gt;</a></li>
            </ul>
        </div>
    `,
    computed: {
        totalPages(){
            return Math.ceil(this.totalItems / this.itemsPerPage);  // 49/10 無條件進位
        }
    }
}

