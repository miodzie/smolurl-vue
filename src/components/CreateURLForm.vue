<template>
  <div class="flex flex-col max-w-xs p-8 m-auto space-y-4 bg-gray-50 rounded
    border border-gray-300">
    <input 
      class="border border-gray-300 rounded bg-gray-50 focus:bg-white"
      v-model="url" />
    <button type="button" 
      class="p-3 bg-green-500 hover:bg-green-600 active:bg-green-400 text-white rounded font-mono text-sm font-semibold border-black shadow-md">
      Create Link
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      url: '',
    };
  },
  methods: {
    hello() {
      alert('hello world!')
    }
  }
}
</script>

