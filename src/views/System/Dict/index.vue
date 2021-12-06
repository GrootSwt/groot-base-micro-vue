<template>
  <div>
    <!--查询输入框、按钮和新增按钮-->
    <div class="search-add">
      <div>
        <el-input
          placeholder="请输入用户名" v-model="searchForm.categoryName" size="small" clearable
          @clear="pageableSearch" @keyup.enter.native="pageableSearch"
          style="width: 35%; margin-right: 10px">
        </el-input>
        <el-date-picker
          v-model="searchForm.dateRange" type="daterange" range-separator="~" size="small" start-placeholder="开始日期"
          end-placeholder="结束日期" clearable @clear="pageableSearch" @keyup.enter.native="pageableSearch"
          style="width: 35%; margin-right: 10px">
        </el-date-picker>
        <el-button type="primary" size="small" icon="el-icon-search" round @click="pageableSearch">查询</el-button>
      </div>
      <div>
        <el-button type="success" size="small" icon="el-icon-plus" round @click="openAddDialog">新增</el-button>
        <el-button type="danger" size="small" icon="el-icon-delete" round @click="batchDelete">批量删除</el-button>
      </div>
    </div>
    <!--用户列表-->
    <el-table border stripe :data="tableData" style="width: 100%;">
      <el-table-column type="selection" width="50" align="center">
      </el-table-column>
      <el-table-column type="index" label="#" width="50" align="center">
      </el-table-column>
      <el-table-column prop="username" label="用户名">
      </el-table-column>
      <el-table-column prop="loginName" label="账号">
      </el-table-column>
      <el-table-column prop="phoneNumber" label="联系方式" width="200">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="240">
      </el-table-column>
      <el-table-column prop="roleName" label="角色名" width="240">
      </el-table-column>
      <el-table-column prop="enabled" label="启用状态" width="100">
        <template v-slot="{ row }">
          <el-switch
            v-model="row.enabled"
            :disabled="row.id === 1"
            active-value="1"
            inactive-value="0"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeEnabled(row.id, row.enabled)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template v-slot="{ row }">
          <el-button size="mini" type="danger" round :disabled="row.id === 1" icon="el-icon-delete"
                     @click="deleteById(row.id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页部分-->
    <el-pagination
      style="margin-top: 12px; float: right"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Dict',
  data () {
    return {
      searchForm: {
        categoryName: '',
        dateRange: []
      },
      tableData: [],
      page: 0,
      size: 10,
      total: 0
    }
  },
  methods: {
    pageableSearch () {
    },
    openAddDialog () {
    },
    batchDelete () {
    },
    changeEnabled () {
    },
    deleteById () {
    },
    handleSizeChange () {
    },
    handleCurrentChange () {
    }
  }
}
</script>

<style scoped>
.search-add {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
</style>
