<template>
    <div class="h-screen w-full relative flex items-center justify-center">

        <div class="absolute flex items-center justify-center">
            <div class="welcome-box">
                Welcome to the Fallacy Analyzer... 
                Utilizing AI this tool can detect fallacies in arguments. 
            </div>
        </div>

      <div class="absolute bottom-10 w-full flex justify-center">
        <div class="input-wrapper">
        
            <input
              v-model="argument"
              type="text"
              placeholder="input first argument..."
              class="input-field"
            />
            <button class="send-button" @click="submitArgument">
              <span class="pi pi-angle-double-up"></span>
            </button>
        </div>
    </div>


    </div>
</template>