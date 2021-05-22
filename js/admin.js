const path = 'jacky';
const url = 'https://vue3-course-api.hexschool.io/';

let app = {
    data: {
        return(){
            let productsData = [];
        }
    },
    methods: {

    },
    getData() {
        axios.get(`${url}api/${path}/admin/products`).then((res) => {
            console.log(this);
            if(res.data.success){
                this.data.productsData = res.data.products;
                console.log(this.data.productsData);
                this.render();
            }
        })
    },
    render() {
        const productList = document.querySelector('#productList');
        str = "",
        this.data.productsData.forEach((item, index) => {
            console.log(item);
            str += `
            <tr>
                <td>
                    ${item.title}
                </td>
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
                    <button type="button" class="btn btn-sm btn-outline-danger move deleteBtn" data-action="remove" id="delete" data-id="${item.index}"> 刪除 </button>
                </td>
            </tr> 
            `
        })
        console.log(str);
        productList.innerHTML = str;

        const delBtn = document.querySelectorAll("#delete")
        delBtn.forEach(item => {
            console.log('click')
        })
    },
    deleteItem(){
        const id = e.target.dataset.id;
        axios.delete(`${url}/api/${path}/admin/order/${id}`).then((res)=>{
            console.log(res);
        })

    },
    init() {
        // 將cookie的token取出來
        // 將token存入header
        let token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        console.log(token);
        this.getData();
    }
}


app.init();