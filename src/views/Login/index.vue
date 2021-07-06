<template>
  <div class="login-container">
    <el-form :model="loginFormData" :rules="loginFormRule" ref="loginFormRef" class="login-form">
      <el-form-item prop="loginName">
        <el-input type="text" v-model="loginFormData.loginName" placeholder="请输入账号"
                  prefix-icon="el-icon-user">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginFormData.password" placeholder="请输入密码"
                  @keyup.enter.native="submit" prefix-icon="el-icon-lock">
        </el-input>
      </el-form-item>
      <div class="form-buttons">
        <el-button type="primary" @click="submit">登录</el-button>
        <el-button @click="cancel">清空</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { setCookie } from '@/utils/cookies'

export default {
  name: 'Login',
  data () {
    return {
      redirect: '',
      loginFormData: {
        loginName: '',
        password: ''
      },
      loginFormRule: {
        loginName: [
          {
            required: true,
            message: '请输入账号！',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码！',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted () {
    this.redirect = this.$route.query.redirect
  },
  computed: {
    ...mapState('user', ['loginUserInfo']),
    ...mapState('menu', ['menuList'])
  },
  methods: {
    ...mapMutations('user', ['setLoginUserInfo', 'setRoleInfo']),
    ...mapMutations('menu', ['setMenuList']),
    ...mapActions('menu', ['getMenuList']),
    submit () {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) {
          return this.$message.error('帐号或密码未填写！')
        }
        this.postRequest('/micro-user/login', this.loginFormData).then(res => {
          if (res.status !== 'success') {
            return this.$message.error('登录失败，账号或密码错误！')
          }
          // 用户信息
          this.setLoginUserInfo(res.data.userInfo)
          // 菜单信息
          this.setMenuList(res.data.menu)
          // 角色信息
          this.setRoleInfo(res.data.role)
          const expireTime = new Date(new Date().getTime() + 60 * 1000 * 60 * 2)
          setCookie('userInfo', res.data.userInfo, { expires: expireTime })
          setCookie('token', res.data.token, { expires: expireTime })
          this.cancel()
          this.$router.push({ path: this.redirect ? this.redirect : '/' })
        })
      })
    },
    cancel () {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style scoped>
.login-container {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 40%;
  border: 1px solid #515a6e;
  min-height: 200px;
}

.login-form {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}

.form-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
