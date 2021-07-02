<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ this.$store.state.boardvalue  }}</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="boardvalue">更多</el-button>
    </div>
    <div class="text item">
       <cardtable/>
    </div>
  </el-card>
</template>

<script>
import cardtable from "./cardtable";
export default {
  components: {cardtable},
  methods: {
    boardvalue() {
      this.$store.dispatch('CHANGE_BOARDVALUE', "子版块")
    }
  }
}


</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 1000px;
}
</style>
