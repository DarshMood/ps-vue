<template>
  <div class="home">
    <h1>Welcome to my site</h1>

    <p>
      This is my personal website. Built from scratch with Vue3 utilized to showcase some work of mine and share a little about myself.
      This website was designed to be scalable to allow me to build things as I want. Check it out!
    </p>

    <h2>Pages</h2>
    <ul>
      <li><router-link to="/about">About Me</router-link></li>
      <li><a href="/games">Games</a></li>
      <li><a href="/tools">Tools</a></li>
    </ul>

    <h2>Coming Soon...</h2>
    <ul>
      <li>VUE3 Upgrade</li>
      <li>Traveling Salesman</li>
      <li>API Project</li> 
      <li>Web Scrape Project</li>
      <li>SAA-C03 Study Material</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>