<template>
  <div class="page-container">
     

        <block-title
                    titleAlign="center"
                    topTitle=""
                    bigTitle="Another page"
                    description="A Vuejs Starter template with Webpack, Axios, Router included and ready to be used."
                    showButton
              >
                <div class="loycha_btn inline-buttons">
                          <router-link :to="'/'" class="btn-big bg--primary">
                              Back to home
                          </router-link>
                        
                </div>
       
        </block-title>

  

  </div>
    

 
</template>

<script>


/* Import component */
import Block_Title from '../components/blocks/section-title';


export default {
  name: 'HelloWorld',
  data () {
    
    return {
       
    }
  },
  head: {
    title: {
      inner: 'Homepage'
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'Name of my application' },
      { name: 'description', content: 'A description of the page', id: 'desc' }, // id to replace intead of create element
      
      // Twitter
      { name: 'twitter:title', content: 'Content Title' },
      // with shorthand
      { n: 'twitter:description', c: 'Content description less than 200 characters'},
      
      // Google+ / Schema.org
      { itemprop: 'name', content: 'Content Title' },
      { itemprop: 'description', content: 'Content Title' },
      
      // Facebook / Open Graph
      { property: 'fb:app_id', content: '123456789' },
      { property: 'og:title', content: 'Content Title' },
      // with shorthand
      { p: 'og:image', c: 'https://example.com/image.jpg' },
     
    ]
  },
  methods : {
    
  },
  components : {
      'block-title' : Block_Title
  },
  created(){
      this.changeLanguage();
  },
  beforeUpdate() {
        
  },
  updated() {
     
  },
  beforeMount(){
    
  }

}
</script>
