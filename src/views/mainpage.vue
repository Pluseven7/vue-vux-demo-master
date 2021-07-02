<template>

  <div id="home">
    <el-container>
      <el-container>

          <el-aside width="initial">
            <el-button icon="el-icon-user-solid" circle style="display:block;margin:0 auto"
                       @click="toggleCollapse"/>
<!--            <el-button type="info" icon="el-icon-user-solid" circle @click="toggleCollapse"></el-button>-->
            <el-menu class="el-menu-vertical-demo"
                     default-active="1-1"
                     collapse-transition="true"
                     @open="handleOpen"
                     @close="handleClose"
                     :collapse="isCollapsed"
                     mode="vertical"

            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-message"/>
                  <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    板块一
                    <el-badge class="mark" :value="12" />
                  </el-menu-item>
                  <el-menu-item index="1-2">板块二</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="1-3">板块三</el-menu-item>
                  <el-menu-item index="1-4">板块四</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>

        <el-container>
          <el-header>Header</el-header>
          <el-main>
            <maincard/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>

import Maincard from "./maincard";
export default {
  components: {Maincard},
  data() {
    return {
      isCollapsed: true,
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toggleCollapse () {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    height: 1080px;

  }
  .el-header, {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .toggle {
    font-size: 36px;
    color: #989898;
    cursor: pointer;
    line-height: 30px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }
}

</style>
