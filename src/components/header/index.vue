<template>
    <div class="m-header">
        <el-row>
            <top-bar/>
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>
<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'
console.log(searchBar)
console.log(topBar)
export default {
  components: {
    searchBar,
    topBar

  }

}
</script>
<style lang="scss">
    @import '@/assets/css/public/header/index.scss';
</style>
