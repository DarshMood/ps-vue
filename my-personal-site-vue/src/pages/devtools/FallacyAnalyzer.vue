<template>
  <div class="h-screen w-full flex flex-col items-center justify-between p-6">

    <!-- Header / Welcome Box -->
    <div class="flex flex-col items-center mt-10 text-center max-w-xl">
      <h1 class="text-3xl font-semibold">Fallacy Analyzer</h1>
      <p class="text-gray-600 mt-3">
        Utilizing AI, this tool detects logical fallacies in structured debate.
      </p>
    </div>

    <!-- (Future) Results Area -->
    <div class="flex-1 w-full max-w-2xl flex items-center justify-center">
      <div class="text-gray-400 italic">
        Enter an argument below to begin analysis.
      </div>
    </div>

    <!-- Input Area -->
    <div class="w-full max-w-2xl mb-10">
      <div class="flex items-end gap-3 bg-white shadow-md rounded-xl p-4">
        <textarea
          v-model="argument"
          placeholder="Type your argument here..."
          class="w-full h-32 p-3 rounded-lg border overflow-y-auto focus:outline focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
            @click="submitArgument"
            class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
            <span class="pi pi-angle-double-up"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import 'primeicons/primeicons.css';
  import { ref } from 'vue'

  const turns = ref([]);
  const currentSpeaker = ref('A');
  const argument = ref('')
</script>
