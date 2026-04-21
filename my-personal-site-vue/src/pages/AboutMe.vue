<template>
  <div class="container mx-auto max-w-3xl py-10">
    <Card>
      <CardHeader>
        <CardTitle class="text-3xl font-bold">About Me</CardTitle>
        <CardDescription>
          A little background about who I am and what I do.
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          <div class="md:col-span-2 space-y-4">
            <p class="leading-relaxed text-muted-foreground">
              My name is Zachary Mueller. I was born on 08‑22‑1998 in St. Louis, Missouri.
              Starting at an early age I had a deep fascination with computers and tech.
              That fascination motivated me to pursue my bachelor's degree in Computer Science
              at Missouri State University. On 12‑17‑2021 I graduated with my BS in Computer Science
              and a minor in Math.
            </p>

            <p class="leading-relaxed text-muted-foreground">
              Since then, I’ve been working at O’Reilly as a software engineer on the Pricing team,
              doing full‑stack enterprise development, batch job orchestration, multi‑app communication,
              and modernizing legacy codebases. I’m currently studying for my SAA‑C03 certification
              and excited to continue growing in my career.
            </p>
          </div>

          <div class="flex justify-center">
            <AspectRatio class="rounded-lg overflow-hidden border">
              <img
                src="../assets/about-photo.jpeg"
                alt="Profile photo"
                class="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <router-link to="/">
          <Button variant="secondary">← Back to Home</Button>
        </router-link>
      </CardFooter>
    </Card>
  </div>
</template>
