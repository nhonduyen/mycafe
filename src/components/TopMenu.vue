<template>
<nav class="container-fluid sticky-top" id="menu1">
        <section class="container" id="horizon-menu1">
            <div class="row" id="category-container">
                <div class="scrollmenu col" data-simplebar>
                   <ul>
                       <li v-for="item in items">{{item.title}}</li>
                   </ul>
                </div>
                <i ref="searchIcon" @click="showSearchBar($event)" id="btn-search" class="fa fa-search"></i>
                <input ref="searchBox" v-model="keyword" type="search" name="search" id="search" placeholder="&#xf002 Nhập tên đồ uống" />
                <i ref="searchClose" @click="closeSearch()" id="search-close" class="fa fa-close"></i>
            </div>
        </section>
    </nav>
</template>

<script>
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import 'simplebar'

export default {
  name: 'TopMenu',
  data () {
    return {
      items: [{
        title: 'a'
      },
      {
        title: 'b'
      }],
      keyword: ''
    }
  },
  mounted: function () {
    this.$refs.searchClose.style = 'display:none'
    this.$refs.searchBox.style = 'display:none'
  },
  watch: {
    keyword: function (val, oldval) {
      console.log(`change from ${oldval} to ${val}`)
    }
  },
  methods: {
    closeSearch: function () {
      this.$refs.searchClose.style = 'display:none'
      this.$refs.searchBox.style = 'display:none; width: 0%;'
    },
    showSearchBar: function (event) {
      event.target.style = 'display: none'
      this.$refs.searchBox.focus()
      this.$refs.searchBox.style = 'display:block; width: 50%;'
      this.$refs.searchClose.style = 'display:block'
    }
  }
}
</script>

<style scoped>
#menu {
    height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid rbga(255, 255, 255, 0.5);
    text-align: center;
    left: 0;
    top: 45px;
    margin: 0 auto;
}

#bar {
    color: #fff;
    font-size: 26px;
    position: absolute;
}

div.scrollmenu {
    white-space: nowrap;
}

#menu1 ul li .active {
    background-color: #a16e39;
    color: #ffffff;
    border-radius: 15px;
}

input[type=search] {
    width: 30px;
    height: 29px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    font-family: FontAwesome;
    font-size: 15px;
    border-radius: 15px;
    margin: 10px auto auto 5px;
    border: 1px solid #efefef;
}

#btn-search {
    width: 20px;
    height: 20px;
    margin: 5px auto auto 5px;
    font-size: 28px;
    background-size: contain;
    cursor: pointer;
    color: #a16e39;
}

#search-close {
    width: 20px;
    height: 20px;
    margin: 10px auto auto 5px;
    font-size: 28px;
    color: red;
    background-size: contain;
    cursor: pointer;
}

input[type=search]:focus {
    width: 60%;
}
#menu1 {
    height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid rbga(255, 255, 255, 0.5);
    text-align: center;
    left: 0;
    margin: 0 auto;
    z-index: 100;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.06);
    margin-bottom: 20px;
}

#menu1 ul {
    white-space: nowrap;
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: left;
    position: relative;
}

#menu1 ul li {
    padding: 8px 0;
    display: inline-block;
    height: 45px;
    text-transform: uppercase;
}

#menu1 ul li a {
    line-height: 30px;
    height: 30px;
    padding: 6px 20px;
    border-radius: 15px;
    text-decoration: none;
    color: #000;
}
</style>