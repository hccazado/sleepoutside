export default class ProductListing{
    constructor (category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init(){
        const data = await this.dataSource.getData();
    }

    renderList(data){
        data.forEach(item =>{

        });
    }
    roductCartTemplate(){
        return `<li class="product-card">
                    <a href="product_pages/index.html?product=">
                        <img src="" alt="image of ">
                        <h3 class="card__brand"></h3>
                        <h2 class="card__name"></h2>
                        <p class="product-card__price">$</p>
                    </a>
                </li>`
    }
}

