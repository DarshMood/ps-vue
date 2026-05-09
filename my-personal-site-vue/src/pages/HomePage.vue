<template>
  <div class="container mx-auto p-10 space-y-8">
    
    <section class="space-y-4">
      <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Zach's Workshop
      </h1>
      <p class="text-xl text-muted-foreground leading-relaxed">
        Built with Vue3 to showcase my work and share a little about myself. 
        Designed to be scalable so I can build as I go. 
        This webspace serves as a personal workshop for me to manifest my ideas.
      </p>
    </section>

    <Separator />

    <div class="grid gap-6 md:grid-cols-2">
      
      <Card>
        <CardHeader>
          <CardTitle>Explore</CardTitle>
          <CardDescription>Check out some of the stuff I've made.</CardDescription>
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
          <CardDescription>Future Plans</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-wrap gap-2">
            <Badge variant="secondary">SAA-C03 Certification</Badge>
            <Badge variant="secondary">Traveling Salesman</Badge>
            <Badge variant="secondary">API Project</Badge>
            <Badge variant="secondary">Web Scrape Project</Badge>
            <Badge variant="secondary">AWS Site Hosting</Badge>
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle>Needs Polishing</CardTitle>
          <CardDescription>Work that is majority complete just needs some polish</CardDescription>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Games</Badge>
              <Badge variant="secondary">Fallacy Analyzer</Badge>
              <Badge variant="secondary">SQL Cleaner</Badge>
            </div>
          </CardContent>
        </CardHeader>
        <CardHeader>
          <CardTitle>Complete</CardTitle>
          <CardDescription>Mark it done!</CardDescription>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">About Me</Badge>
              <Badge variant="secondary">Backend AI integration</Badge>
              <Badge variant="secondary">Vue3 Upgrade</Badge>
              <Badge variant="secondary">Frontend Modernization w/ shadcn</Badge>
            </div>
          </CardContent>
        </CardHeader>
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