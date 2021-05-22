// 帳號 jacky123789456@gmail.com    
// 密碼 jacky2360960

const api_path = 'jacky';
const url = 'https://vue3-course-api.hexschool.io/';


const emailInput = document.querySelector('#username');
const pwInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', login);

function login(e){
    e.preventDefault();
    console.log('click');
    let username = emailInput.value;
    let password = pwInput.value;

    const user = {
        username,
        password
    }

    axios.post(`${url}admin/signin` , user).then((res) => {
        console.log(res);
        if(res.data.success){
            // 取得 token
            // const token = res.data.token;
            // const expired = res.data.expired;
            const { token , expired } = res.data; //一種解構手法 (所寫)，當確定 dtat 裡面有這個值得時候就可以這樣寫
            // 將 token 存到 cookie~
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            window.location = 'admin.html';
        }else{
            alert('請輸入正確的帳號密碼');
        }
    }).catch((err) => {
        console.log(err);
    })
}