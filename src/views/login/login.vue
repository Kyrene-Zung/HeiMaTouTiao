<template>
  <div class="login-container"><van-nav-bar title="登录" fixed /></div>
  <!-- 登录的表单 -->
  <van-form>
    <van-field v-model="form.mobile" type="tel" label="手机号码" placeholder="请输入手机号码" required></van-field>
    <van-field v-model="form.code" type="password" label="登录密码" placeholder="请输入登录密码" required></van-field>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script setup>
import { reactive, toRefs } from 'vue';

const state = reactive({
  form: {
    mobile: '',
    code: ''
  }
})
const { form } = toRefs(state)
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