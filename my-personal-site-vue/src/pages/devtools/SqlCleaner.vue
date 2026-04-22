<template>
  <div class="container mx-auto max-w-3xl py-10 space-y-8">
    <h1 class="text-2xl font-semibold">SQL Cleaner</h1>
    <Card>
      <CardHeader>
        <CardTitle>Input SQL</CardTitle>
        <CardDescription>Paste your wrapped SQL below</CardDescription>
      </CardHeader>

      <CardContent class="space-y-4">
        <Label for="sql-input">SQL Input</Label>
        <Textarea
          id="sql-input"
          v-model="sqlInput"
          rows="15"
          placeholder="Paste your SQL here..."
        />
      </CardContent>

      <CardFooter>
        <Button @click="cleanSql" class="w-full">
          Clean SQL
        </Button>
      </CardFooter>
    </Card>

    <Separator />

    <!-- Output -->
    <Card>
      <CardHeader>
        <CardTitle>Output</CardTitle>
        <CardDescription>Cleaned SQL</CardDescription>
      </CardHeader>

      <CardContent>
        <Textarea
          id="sql-output"
          :value="sqlOutput"
          rows="15"
          readonly
        />
      </CardContent>
    </Card>

    <router-link to="/" class="text-sm text-blue-600 hover:underline">
      ← Back to Home
    </router-link>

  </div>
</template>

<script setup>
import { ref } from 'vue'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

const sqlInput = ref('')
const sqlOutput = ref('')

// TODO: maintain formatting 
function cleanSql() {
  sqlOutput.value = sqlInput.value
    .replace(/"\s*\+\s*"/g, '')
    .replace(/"/g, '')
    .trim()
}
</script>
