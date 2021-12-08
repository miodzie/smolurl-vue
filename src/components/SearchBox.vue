<template>
  <button type="button" @click="hello" 
    class="p-2  bg-white rounded-sm shadow-md ">
    Create Link
  </button>
</template>

<script>
export default {
  methods: {
    hello() {
      alert('hello world!')
    }
  }
}
</script>
