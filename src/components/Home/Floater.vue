<template>
    <div class="floater">
        <img v-attr="src = imgsrc">
    </div>
</template>

<script>
export default {
  name: 'floater',
  props: ['imgsrc'],
  data(){
      return {
          link: this.imgsrc
      }
  },
  methods: {
    getURL() {
      return this.imgsrc;
    }
  }
}
</script>


<style>

</style>