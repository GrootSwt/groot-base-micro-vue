<template>
  <div class="login-info">
    <!--用户名下拉框-->
    <el-dropdown placement="top" style="cursor: pointer">
      <span class="el-dropdown-link">
        {{ loginUserInfo.username }}
      </span>
      <el-dropdown-menu slot="dropdown" style="text-align: center">
        <el-dropdown-item>
          <span @click="changePassword">更改密码</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span @click="logout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!--修改密码对话框-->
    <el-dialog
      title="修改密码"
      :visible.sync="changePasswordFlag"
      width="30%"
      :before-close="cancel">
      <el-form :model="passwordForm" :rules="passwordFormRule" ref="passwordFormRef" label-width="80px">
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input type="password" v-model="passwordForm.oldPassword" placeholder="请输入旧密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" v-model="passwordForm.newPassword" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="再次输入" prop="newPassword2">
          <el-input type="password" v-model="passwordForm.newPassword2" placeholder="请再次输入新密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { removeCookie } from '@/utils/cookies'

export default {
  name: 'LoginInfo',
  data () {
    const validateNewPass = (rule, value, callback) => {
      const oldPass = this.passwordForm.oldPassword
      if (value !== '' && oldPass !== '' && value === oldPass) {
        callback(new Error('新密码与旧密码相同'))
      } else {
        callback()
      }
    }
    const validateNewPass2 = (rule, value, callback) => {
      const newPass = this.passwordForm.newPassword
      if (value !== '' && newPass !== '' && value !== newPass) {
        callback(new Error('新密码两次输入不相同'))
      } else {
        callback()
      }
    }
    return {
      headerImg: require('../../../public/images/header.jpg'),
      changePasswordFlag: false,
      passwordForm: {
        oldPassword: '',
        newPassword: '',
        newPassword2: ''
      },
      passwordFormRule: {
        oldPassword: [
          {
            required: true,
            message: '请输入旧密码',
            trigger: 'blur'
          }
        ],
        newPassword: [
          {
            required: true,
            message: '请输入新密码！',
            trigger: 'blur'
          },
          {
            validator: validateNewPass,
            trigger: 'blur'
          }
        ],
        newPassword2: [
          {
            required: true,
            message: '请再次输入新密码！',
            trigger: 'blur'
          },
          {
            validator: validateNewPass2,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    ...mapState('user', ['loginUserInfo'])
  },
  created () {
  },
  mounted () {
  },
  methods: {
    logout () {
      removeCookie('token')
      removeCookie('userInfo')
      removeCookie('roleInfo')
      removeCookie('menuInfo')
      this.$router.push('/login')
    },
    changePassword () {
      this.changePasswordFlag = true
    },
    submit () {
      this.$refs.passwordFormRef.validate(valid => {
        if (!valid) {
          return this.$message.error('旧密码或新密码未输入或输入错误！')
        }
        this.$refs.passwordFormRef.resetFields()
        this.$message.success('密码更改成功！')
        this.changePasswordFlag = false
      })
    },
    cancel () {
      this.$refs.passwordFormRef.resetFields()
      this.changePasswordFlag = false
    }
  }
}
</script>

<style scoped>
a {
  display: inline-block;
  width: 75px;
  text-align: center;
  color: #515a6e;
}

a:hover {
  border-bottom: 1px solid #57a3f3;
}

.login-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

</style>
