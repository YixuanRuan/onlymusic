<template>
    <el-header>
      <el-row>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><el-image style="width: 180px; height: 70px"
                                                                  :fit="cover" :src="url"></el-image></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
    </el-header>
</template>

<script>
  export default {
    name: "navbar",
    data () {
      return {
        url: require("../assets/logo.png"),
      }
    }
  }
</script>

<style scoped>

</style>