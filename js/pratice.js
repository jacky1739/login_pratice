const path = 'jacky';
const url = 'https://vue3-course-api.hexschool.io/';

// 帳號 jacky123789456@gmail.com    
// 密碼 jacky2360960

let app = {
        data: {
            return() {
                let products = [];
            }
        },
        getData() {  
            axios.get(`${url}api/${path}/admin/products`).then((res) => {
                console.log(res);
                if(res.data.success){
                    this.data.products = res.data.products;
                    console.log(this.data.products);
                    this.render();
                }
            })
        },
        render() {
            const productList = document.querySelector('#productList');
            let template = "";
            this.data.products.forEach((item) => {
                template += `
                    <tr>
                    <td>${item.title}</td>
                    <td width="120">
                        ${item.origin_price}
                    </td>
                    <td width="120">
                        ${item.price}
                    </td>
                    <td width="100">
                        <span class="">${item.is_enabled}</span>
                    </td>
                    <td width="120">
                        <button type="button" class="btn btn-sm btn-outline-danger move deleteBtn" data-action="remove" id="del" data-id="${item.id}"> 刪除 </button>
                    </td>
                    </tr>
                `
            })
            console.log(template);
            productList.innerHTML = template;

            const del = document.querySelectorAll('#del');
            del.forEach(btn => {
                btn.addEventListener('click', this.deleteProduct);
            })
        },
        deleteProduct(e){
            // 事件物件
            const id = e.target.dataset.id;
            console.log('deleteProduct', e);
            console.log(id);   // 無法使用 會顯示禁止使用
            axios.delete(`${url}api/${path}/admin/product/${id}`).then((res) =>{
                console.log(res);
                this.render();
            })
        },
        init() {
            // Cookie 取出來
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexSchool\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            axios.defaults.headers.common['Authorization'] = token;
            console.log(token);
            this.getData();
        },
        methods: {

        }
}

app.init();