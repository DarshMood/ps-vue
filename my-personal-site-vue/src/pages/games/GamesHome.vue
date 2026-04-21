<template>
  <div class="games container mx-auto p-10 space-y-6">
    
    <Card>
      <CardContent class="flex flex-col items-center gap-4">
        <!-- @TODO: MAKE A GAME CARD COMPONENT -->
        <img
          src="../../assets/tictactoe.png"
          alt="brick break picture"
          class="justify-center thumbnail"
        />
        <Button as-child variant="outline" class="justify-start">
          <router-link to="/tic-tac-toe">Tic-Tac-Toe</router-link>
        </Button>

        <img
          src="../../assets/brick-break.png"
          alt="brick break picture"
          class="justify-center thumbnail"
        />
        <Button as-child variant="outline" class="w-full">
          <router-link to="/brick-breaker">Brick Breaker</router-link>
        </Button>

      </CardContent>
    </Card>
  </div>
</template>