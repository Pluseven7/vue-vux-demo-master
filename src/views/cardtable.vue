<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :show-header="false"
    >
    <el-table-column
      prop="date"
      label="日期"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="贴名"
      width="600">
    </el-table-column>
    <el-table-column
      prop="owner"
      label="发帖人"
      align="right">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // tableData: [{
      //   date: '05-02',
      //   name: '帖子帖子',
      //   owner: '甲乙丙丁'
      // }, {
      //   date: '05-04',
      //   name: '帖子帖子帖子帖子',
      //   address: '甲乙丙'
      // }, {
      //   date: '05-01',
      //   name: '帖子帖子帖子帖子甲乙丙丁',
      //   address: '甲乙'
      // }, ],
      boardDate: [{
        tpId: '',
        tpName: '',
        tpManagerId: '',
        tpBdId: '',
        tpModifyId: '',
        tpDelete: '',
        remake: ''
      }]
    }
  },
  methods: {
    getTable(){
      axios.post(BASE_URL+"/sys-board/getThisAllTopic",1)
        .then(function (res){
          this.getModify;
        })
    },
    next(){
      this.getModify().then(() =>{
        this.getTable()
      })
    },
    getOtherList(){
      return axios.get(BASE_URL+"/sys-modify/getModify",)
    }
  }
}
</script>
