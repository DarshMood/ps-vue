<script setup lang="ts">
import GameCard from '@/components/ui/card/GameCard.vue';
import brickBreakImg from '@/assets/brick-break.png';
import ticTacToeImg from '@/assets/tictactoe.png';

</script>

<template>
  <div class="games container mx-auto p-10 space-y-6">
    <GameCard
      title="Tic-Tac-Toe"
      :image="ticTacToeImg"
      link="/tic-tac-toe"
    />
  <Separator />
    <GameCard
      title="Brick Breaker"
      :image="brickBreakImg"
      link="/brick-breaker"
     />
    
    <Button as-child variant="outline" class="w-full">
      <router-link to="/"><- Back to Home</router-link>
    </Button>
  </div>
</template>