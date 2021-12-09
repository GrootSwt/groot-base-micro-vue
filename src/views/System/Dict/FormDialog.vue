<template>
  <div>
    <el-dialog
      :title="title"
      :visible="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <el-form :model="form" :rules="formRules" ref="formRef" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="分类名称" prop="categoryName">
              <el-input v-model="form.categoryName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="分类键" prop="categoryKey">
              <el-input v-model="form.categoryKey"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="描述" prop="description">
          <el-input type="textarea" v-model="form.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'FormDialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      form: {},
      formRules: {
        categoryName: [
          {
            required: true,
            message: '请输入分类名称！',
            trigger: 'blur'
          }
        ],
        categoryKey: [
          {
            required: true,
            message: '请输入分类键！',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {
    formData (n) {
      this.form = n
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleSubmit () {
      this.$emit('submit')
    }
  }
}
</script>

<style scoped>

</style>
