<script setup>
const props = defineProps({
  emptyTextVisibility: Boolean,
  emptyText: {
    type: String,
    default: "Description text for future contents..."
  }
});
</script>
<!--- UNUSED FOR NOW -->
<!---@TODO: Let's update this with chat once FallacyAnalyzer is-->
<template>
  <div class="w-full max-w-2xl mx-auto flex flex-col gap-4">
    <div
      v-if="introTextVisible"
      class="text-gray-400 italic text-center"
    >
      {{ emptyText }}
    </div>
    <slot />
  </div>
</template>
