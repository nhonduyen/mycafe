<template>
    <header>
        <b-container fluid id="header">
            <b-container>
                <a href="javascript:void(0);" id="bar" click="showModal" title="menu">
                    <i id="icon" class="fa fa-bars"></i>
                </a>
                <h4 class="page-header">My cafe</h4>
                <a title="Home" class="float-right" href="/"><i id="icon" class="fa fa-coffee"></i></a>
            </b-container>
        </b-container>
    </header>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style>
#header {
    background-color: #a16e39;
    height: 45px;
    color: #ffffff;
}

.page-header {
    text-align: center;
    font-size: 18px;
    font-weight: 700px;
    line-height: 45px;
}

#icon {
    color: #ffffff;
    font-size: 26px;
    top: 10px;
    position: absolute;
}

#header {
    background-color: #a16e39;
    height: 45px;
    color: #ffffff;
}

</style>
