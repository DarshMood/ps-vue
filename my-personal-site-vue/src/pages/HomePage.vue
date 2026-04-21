<template>
  <div class="container mx-auto p-10 space-y-8">
    
    <section class="space-y-4">
      <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to my site
      </h1>
      <p class="text-xl text-muted-foreground leading-relaxed">
        Built from scratch with Vue 3 to showcase my work and share a little about myself. 
        Designed to be scalable so I can build as I go. Check it out!
      </p>
    </section>

    <Separator />

    <div class="grid gap-6 md:grid-cols-2">
      
      <Card>
        <CardHeader>
          <CardTitle>Explore</CardTitle>
          <CardDescription>Navigate through the different sections of my portfolio.</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col gap-2">
          <Button as-child variant="outline" class="justify-start">
            <router-link to="/about">About Me</router-link>
          </Button>
          <Button as-child variant="outline" class="justify-start">
            <router-link to="/games">Games Collection</router-link>
          </Button>
          <Button as-child variant="outline" class="justify-start">
            <router-link to="/tools">Developer Tools</router-link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Roadmap</CardTitle>
          <CardDescription>What I'm currently working on.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-wrap gap-2">
            <Badge variant="secondary">Traveling Salesman</Badge>
            <Badge variant="secondary">API Project</Badge>
            <Badge variant="secondary">Web Scrape Project</Badge>
            <Badge variant="secondary">SAA-C03 Study Material</Badge>
            <Badge>Vue 3 Upgraded = in progress</Badge>
          </div>
        </CardContent>
      </Card>

    </div>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
</script>