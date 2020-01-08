<template>
    <div>
        <h1>登录</h1>
        <van-cell-group>
            <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('question')"
            />
            <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
            />
            <van-button type="primary" block @click="login">登录</van-button>
        </van-cell-group>


    </div>
</template>
<script>
    import { Toast } from 'vant';
    export default {
        data(){
            return {
                username:'',
                password:'',
                loginError:false
            }
        },
        methods:{
            login(){
                if(this.username === 'abc' && this.password === '123'){
                    this.$router.push({name:'main'})
                }else {
                    Toast.fail('账号或密码错误，请重试！');
                }
            }
        }
    }
</script>