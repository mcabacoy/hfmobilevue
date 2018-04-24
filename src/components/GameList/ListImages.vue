<template>
    <div class="game-image" :style="'background:url('+ (link)+ ')'">
    </div>
</template>

<script>
export default {
  name: 'game-image',
  props: ['bgsrc'],
  data(){
      return {
          link: this.bgsrc
      }
  },
  methods: {
    getURL() {
      return this.bgsrc;
    }
  }
}
</script>