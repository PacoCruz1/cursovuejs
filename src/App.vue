<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> /
    <router-link to="/About">About</router-link> -->
    <keep-alive>
        <component :is="currentComponent"></component>
    </keep-alive>    

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <HelloWorld msg="Hola Mundo"></HelloWorld>


    <router-view></router-view>
  </div>

  
</template>

<script type="text/javascript"  src="./Scripts/app.js"></script>

<style src="./Styles/CSS/app.css"></style>


