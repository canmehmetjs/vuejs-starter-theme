<template>
 
    <header class="text-center">
        {{msg}}
    </header>

</template>
<script>
export default {
  name: 'siteHeader',
  data () {
    
	return {
      title: 'header',
      msg: 'This is header'
    }
  },
  methods: {
      
  }


}
</script>
<style scoped>
    header{
       padding: 20px 0;
        background: #33344f;
        color: #fff;
        margin-bottom: 40px;
        font-family: "Nunito",'sans-serif';
    }
</style>
