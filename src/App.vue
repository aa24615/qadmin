<template>
  <div id="app">
    <Header />

    <Left />
  </div>
</template>

<script>
  import 'bootstrap';
import Header from './components/Header.vue'
import Left from './components/Left.vue'

export default {
  name: 'App',
  components: {
    Header,
    Left
  }
}
</script>

<style>

</style>
