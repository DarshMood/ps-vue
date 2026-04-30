<template>
  <div class="h-screen w-full flex flex-col items-center justify-between p-6">

    <div class="flex flex-col items-center mt-10 text-center max-w-xl">
      <h1 class="text-3xl font-semibold">Fallacy Analyzer</h1>
      <p class="text-gray-600 mt-3">
        Utilizing AI, this tool detects logical fallacies in structured debate.
      </p>
    </div>

<!-- Results area -->
<div class="flex-1 w-full max-w-2xl flex items-center justify-center">
  <div v-if="isIntroTextVisible" class="text-gray-400 italic">
    Enter an argument below to begin analysis.
  </div>
</div>

<div class="w-[60%] flex flex-col">
  <div
    v-for="turn in turns"
    :key="turn"
    class="flex w-full"
    :class="{
      'justify-end': turn.Speaker === 'A',
      'justify-start': turn.Speaker === 'B',
      'justify-center': turn.Speaker === 'AI'
    }"
  >
    <div
      :class="{
        'p-3 rounded-lg bg-blue-100 border break-all my-2': turn.Speaker === 'A',
        'p-3 rounded-lg bg-red-100 border break-all my-2': turn.Speaker === 'B',
        'p-3 rounded-lg bg-gray-200 border break-all my-2 text-center max-w-[80%]': turn.Speaker === 'AI'
      }"
    >
      {{ turn.text }}
    </div>
  </div>
</div>

    <!-- Input Area -->
    <div class="w-full max-w-2xl mb-10">
      <div v-if="currentSpeaker == 'A'" class="flex items-end gap-3 bg-white shadow-md rounded-xl p-4">
        <textarea 
          v-model="argument"
          placeholder="Type your argument here..."
          class="w-full h-32 p-3 rounded-lg border overflow-y-auto focus:outline focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <Button 
            :disabled="argument === ''"
            @click="submitArgument"
            class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
            <span class="pi pi-angle-double-up"></span>
        </Button>
      </div>
      <div v-else="currentSpeaker == 'B'" class="flex items-end gap-3 bg-white shadow-md rounded-xl p-4">
        <textarea 
          v-model="argument"
          placeholder="Type your argument here..."
          class="w-full h-32 p-3 rounded-lg border overflow-y-auto focus:outline focus:ring-2 focus:ring-red-400"
        ></textarea>
        <Button 
            :disabled="argument === ''"
            @click="submitArgument"
            class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
        >
            <span class="pi pi-angle-double-up"></span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import 'primeicons/primeicons.css';
  import { ref } from 'vue'

  const isIntroTextVisible = ref(true);

  const turns = ref([]);
  const currentSpeaker = ref('A');
  const argument = ref('')
  const isThinking = ref(false);

  function submitArgument() {
  // Push human turn
  turns.value.push({
    Speaker: currentSpeaker.value,
    text: argument.value
  });

  isIntroTextVisible.value = false;
  const humanSpeaker = currentSpeaker.value;
  argument.value = "";

  isThinking.value = true;

  //const aiText = await getAIResponse(); // your backend call

  const aiText = "I AM AI";
  turns.value.push({
    Speaker: 'AI',
    text: aiText
  });

  isThinking.value = false;

  // Flip human speaker AFTER AI responds
  currentSpeaker.value = humanSpeaker === 'A' ? 'B' : 'A';
  }

</script>
