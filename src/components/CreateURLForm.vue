
<template>
  <div 
    class="flex flex-col max-w-xs p-8 m-auto space-y-4 bg-gray-50 rounded border border-gray-300">
    <span 
      class="font-mono text-xs text-red-50 bg-red-400 rounded p-1.5"
      :hidden="error.length == 0">{{ error }}</span>
    <input 
      class="border border-gray-300 rounded bg-gray-50 focus:bg-white"
      v-model="url" />
    <button 
      @click="createURL"
      :disabled="creating"
      type="button" 
      class="p-3 bg-green-500 hover:bg-green-600 active:bg-green-400 text-white rounded font-mono text-sm font-semibold border-black shadow-md
        disabled:opacity-50
      ">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import { apiClient }  from '../services/API.js'

export default {
  data: function() {
    return {
      creating: false,
      url: '',
      error: '',
    };
  },
  computed: {
    buttonText() {
      return this.creating ? '...' : 'Create smol url!'
    }
  },
  methods: {
    createURL() {
      this.error = '';
      this.creating = true
      apiClient.get('ping').then(r => {
        console.log(r)
      })
      .catch(_ => { this.error = "Uh oh, something went wrong." })
      .finally(() => {
        setTimeout(() => this.creating = false, 1500)
      })
    }
  }
}
</script>

