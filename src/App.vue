<template>
  <div id="app">
   <banner></banner>
   <TopMenu></TopMenu>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'
import Banner from './components/Banner'

export default {
  name: 'app',
  components: {Banner, TopMenu}

}
</script>

<style>
body {
    background-color: #f5f5f5;
    font-family: 'Roboto', sans-serif;
}
#header {
    background-color: #a16e39;
    height: 45px;
    color: #ffffff;
}
#icon {
    color: #ffffff;
    font-size: 26px;
    top: 10px;
    position: absolute;
}
#bar {
    color: #fff;
    font-size: 26px;
    position: absolute;
}
</style>
