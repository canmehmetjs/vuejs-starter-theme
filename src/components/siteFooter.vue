<template>
    <footer class="text-center">
           {{msg}}
    </footer>
</template>
<script>
export default {
  name: 'siteFooter',
  data () {
    return {
      msg: 'This is footer component'
    }
  },
  methods: {

  }


}
</script>
<style scoped>

footer{
     padding: 20px 0;
        background: #33344f;
        color: #fff;
        position: fixed;
        bottom:0;
        width:100%;
        font-family: "Nunito",'sans-serif';

}
</style>
