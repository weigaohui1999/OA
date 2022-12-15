<template>
  <div>
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        active-text-color="#1989fa"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from "@/layout/components/SideBar/Logo.vue";
import {mapGetters} from "vuex";
import variables from '@/styles/variables.scss'
import SidebarItem from "@/layout/components/SideBar/SidebarItem.vue";
export default {
  name: "SideBar",
  components: {
    SidebarItem,
    Logo
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened
    },
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route
      const { path, meta } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    }
  },
  mounted() {
    this.initRoute()
  },
  methods: {
    initRoute() {
      console.log()
      // const route = this.$store.commit("permission/SET_ROUTES", [], {root: true})
    }
  }
}
</script>

<style scoped lang="less">
.scrollbar-wrapper {
  overflow-x: hidden !important;
  background: red;
}
</style>