<template>
  <el-container class="layout-style">
    <!--侧边菜单栏-->
    <el-aside :width="asideWidth">
      <el-menu ref="asideMenuRef" :default-active="$route.path" :collapse="isCollapse" :unique-opened="true" router
               class="el-menu-vertical">
        <template v-for="menu in menuList">
          <el-submenu :index="menu.location" v-if="menu.children.length > 0" :key="menu.id">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span slot="title">{{ menu.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="subMenu.location" v-for="subMenu in menu.children" :key="subMenu.id">
                <i class="el-icon-s-tools"></i>
                {{ subMenu.title }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header-menu">
        <!--菜单折叠按钮-->
        <div class="menu-system-logo">
          <i :class="collapseClass"
             @click="changeCollapse"/>
        </div>
        <!--头部菜单-->
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item v-for="menu in menuList" :key="menu.id" :index="menu.location" @click="closeAsideMenu(menu)">{{ menu.title }}</el-menu-item>
        </el-menu>
        <!--登录信息-->
        <login-info class="login-info"></login-info>
      </el-header>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-style">
        <el-breadcrumb-item :key="index" v-for="(title, index) in $route.meta.breadcrumb">{{ title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import LoginInfo from '@/views/Layout/LoginInfo'
import { getCookie } from '@/utils/cookies'

export default {
  name: 'layout',
  components: { LoginInfo },
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapState('menu', {
      menuList: state => state.menuList
    }),
    collapseClass () {
      return this.isCollapse ? ['menu-logo', 'el-icon-s-unfold', 'menu-logo-after'] : ['menu-logo', 'el-icon-s-unfold']
    },
    asideWidth () {
      return this.isCollapse ? '65' : '200'
    }
  },
  created () {
    const userInfo = JSON.parse(getCookie('userInfo'))
    this.setLoginUserInfo(userInfo)
    this.getRequest(`/micro-user/menu/getMenuListByRoleId/${userInfo.roleId}`).then(res => {
      if (res.status === 'success') {
        this.setMenuList(res.data)
      }
    })
  },
  watch: {},
  methods: {
    ...mapMutations('menu', ['setMenuList']),
    ...mapMutations('user', ['setLoginUserInfo']),
    ...mapActions('menu', ['getMenuList']),
    changeCollapse () {
      this.isCollapse = !this.isCollapse
    },
    closeAsideMenu (menu) {
      if (menu.children.length === 0) {
        const menuArr = this.menuList.filter(item => item.children.length > 0)
        menuArr.forEach(menu => {
          this.$refs.asideMenuRef.close(menu.location)
        })
      }
    }
  }
}
</script>

<style scoped>
.layout-style {
  width: 100%;
  height: 100%;
}

.header-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.login-info {
  margin-right: 20px;
  position: relative;
  float: right;
}

/*系统图标样式*/
.menu-system-logo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
/*面包屑样式*/
.breadcrumb-style {
  margin: 12px 18px;
}
/*缩放图标*/
.menu-logo {
  margin-left: 10px;
  font-size: 25px;
  transition: transform .5s;
}

/*菜单缩放按钮旋转*/
.menu-logo-after {
  transform: rotate(-180deg);
}

/*取消侧边菜单栏X轴方向出现滚动条*/
.el-aside {
  overflow-x: hidden;
}

/*设置侧面菜单栏缩放动画效果时间*/
.horizontal-collapse-transition {
  transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
}

/*更改侧边菜单栏滚动条样式*/
.el-aside::-webkit-scrollbar {
  width: 5px;
}

.el-aside::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.2);
}

.el-aside::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
