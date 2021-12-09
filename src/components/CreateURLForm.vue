<template>
  <div 
    class="flex flex-col max-w-xl p-4 m-auto space-y-4">
    <span 
      class="font-mono text-red-50 bg-red-400 p-1.5"
      :hidden="error.length == 0">{{ error }}</span>
    <input 
      @keyup.enter="createURL"
      placeholder="https://example.com"
      class="border border-gray-200  bg-gray-100 shadow-sm
      font-mono focus:outline-green-200 focus:bg-white "
      v-model="url" />
    <button 
      @click="createURL"
      :disabled="creating"
      type="button" 
      class="p-3 bg-green-500 hover:bg-green-600 active:bg-green-400 text-white
      font-mono  border-black shadow-lg
        disabled:opacity-50
      ">
      {{ buttonText }}
    </button>
  </div>
  <span class="text-sm p-0 font-light font-mono text-gray-200">or cmd+v/ctrl+v</span>
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
  mounted: function() {
    document.addEventListener('paste', (event) => {
      if(event.target.type == 'text') {
        return
      }
      this.url = event.clipboardData.getData('Text')
      if (this.url.length != 0) {
        this.createURL()
      }
    })
  },
  computed: {
    buttonText() {
      return this.creating ? '...' : 'create'
    }
  },
  methods: {
    createURL() {
      this.error = '';
      this.creating = true
      apiClient.get('ping').then(r => {
        console.log(r)
      })
      .catch(_ => { this.error = "someting brokedez oops" })
      .finally(() => {
        setTimeout(() => this.creating = false, 1500)
      })
    }
  }
}
</script>

