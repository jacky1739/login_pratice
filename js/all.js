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
            document.cookie = `hexSchool=${token}; expires=${new Date(expired)}`;
        }
    }).catch((err) => {
        console.log(err);
    })
}