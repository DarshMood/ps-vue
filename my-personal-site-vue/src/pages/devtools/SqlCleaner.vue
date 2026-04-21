
<!---@TODO: This needs a shadcn overhaul -->
<template>
  <p>
    <label for="sql-input">Paste your wrapped sql</label>
  </p>

  <textarea
    id="sql-input"
    v-model="sqlInput"
    rows="25"
    cols="100"
  ></textarea>

  <button style="padding: 10px" @click="cleanSql">
    Clean
  </button>

  <div style="margin-top: 20px;">
    <textarea
      id="sql-output"
      :value="sqlOutput"
      rows="25"
      cols="100"
      readonly
    ></textarea>
  </div>

  <router-link to="/">← Back to Home</router-link>
</template>

<script setup>
import { ref } from 'vue'

const sqlInput = ref('')
const sqlOutput = ref('')

//@TODO: mantain formatting 

function cleanSql() {
  sqlOutput.value = sqlInput.value
    .replace(/"\s*\+\s*"/g, '')
    .replace(/"/g, '')
    .trim()
}
</script>
