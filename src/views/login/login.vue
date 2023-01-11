<template>
  <div class="login-container"><van-nav-bar title="登录" fixed /></div>
  <!-- 登录的表单 -->
  <van-form @submit="login">
    <van-field v-model="form.mobile" type="tel" label="手机号码" placeholder="请输入手机号码" required
      :rules="rules.mobile"></van-field>
    <van-field v-model="form.code" type="password" label="登录密码" placeholder="请输入登录密码" required
      :rules="rules.code"></van-field>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import { loginAPI } from '@/api/userApi'
import { $baseToast } from '@/plugins/aid.js'
import { useRouter } from 'vue-router';
const router = useRouter()
const state = reactive({
  form: {
    mobile: '',
    code: ''
  },
  rules: {
    mobile: [
      { required: true, message: '请填写您的手机号', trigger: 'onBlur' },
      { pattern: /^1\d{10}$/, message: '请填写正确的手机号', trigger: 'onBlur' }
    ],
    code: [
      { required: true, message: '请填写您的密码', trigger: 'onBlur' }
    ]
  }
})
const { form, rules } = toRefs(state)
const login = async () => {
  const { data: res } = await loginAPI(form)
  if (res.code === 200) {
    router.push('/index')
  }
  $baseToast(res.message)
}
</script>

<style lang="less" scoped>
.login-container {
  padding-top: 46px;
}

.van-nav-bar {
  background-color: #007bff;

  :deep(.van-nav-bar__title) {
    color: white;
    font-size: 14px;
  }
}
</style>