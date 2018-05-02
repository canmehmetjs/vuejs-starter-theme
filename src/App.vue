<template>
   <main>
      <header-template></header-template>
      <router-view></router-view>
      <footer-template></footer-template>
   </main>
  
</template>


<script>
import '@/assets/sass/main.scss'
import header from '@/components/siteHeader'
import footer from '@/components/siteFooter'
export default {
  name: 'App',
  data () {
    
    return {
      
    }
  },
  methods: {
     
  },
  components :{
     'header-template' : header,
     'footer-template' : footer
  },
  created() {
    
  }


}
</script>



