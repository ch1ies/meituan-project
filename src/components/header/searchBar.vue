<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in hotPlaceList" :key="index">
                             <router-link :to="{name:'goods',params:{name:item} }">{{ item }}</router-link>
                        </dd>
                        <!-- <dd>
                             <router-link to="/s">抵用券</router-link>
                        </dd>
                        <dd>
                             <router-link to="/s">抵用券</router-link>
                        </dd>
                        <dd>
                             <router-link to="/">抵用券</router-link>
                        </dd> -->
                    </dl>
                    <dl class="searchList" v-if="isSearchList">

                         <dd v-for="(item,index) in searchList" :key="index">
                             <router-link :to="{name:'goods',params:{name:item} }">{{ item }}</router-link>
                        </dd>
                        <!-- <dd><router-link to="/s">火锅</router-link></dd>
                        <dd><router-link to="/">自助餐</router-link></dd>
                        <dd><router-link to="/">自助餐</router-link></dd> -->
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item,index) in suggestLIst" :key="index">{{ item }}</a>
                    <!-- <a href="#">第一温泉度假村</a>
                    <a href="#">第一温泉度假村</a>
                    <a href="#">第一温泉度假村</a>
                    <a href="#">第一温泉度假村</a> -->
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: ['抵用券', '抵用券', '抵用券', '抵用券', '抵用券'],
      searchList: ['火锅', '火锅', '火锅'],
      suggestLIst: ['第一温泉度假村', '第一温泉度假村', '第一温泉度假村', '第一温泉度假村']
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWord
    },
    isSearchList () {
      return this.isFocus && this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss">

    @import "@/assets/css/public/header/search.scss";

</style>
