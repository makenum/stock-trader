<template>
  <div class="container">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<style lang="stylus"></style>
<script>
import Header from './components/Header';
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>
<style lang="stylus" scoped>
body
  padding 30px
.slide-enter-active
  animation slideIn 200ms ease-out forwards
.slide-leave-active
  animation slideOut 200ms ease-out forwards
@keyframes slideIn
  from
    transform translateY(-30px)
    opacity 0
  to
    transform translateY(0)
    opacity 1
@keyframes slideOut
  from
    transform translateY(0)
    opacity 1
  to
    transform translateY(-30px)
    opacity 0
</style>
