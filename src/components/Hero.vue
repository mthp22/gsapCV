<template>
  <section class="hero">
    <h1 ref="nameEl">{{ profile.name }}</h1>
    <p ref="titleEl">{{ profile.title }}</p>
    <span ref="taglineEl">{{ profile.tagline }}</span>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useCVStore } from '@/stores/cvStore'

const store = useCVStore()

const profile = store.profile

const nameEl = ref(null)
const titleEl = ref(null)
const taglineEl = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  tl.from(nameEl.value, {
    y: 60,
    opacity: 0,
    duration: 1,
  })
    .from(
      titleEl.value,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.5',
    )
    .from(
      taglineEl.value,
      {
        opacity: 0,
        y: 20,
      },
      '-=0.4',
    )
})
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
}

h1 {
  font-size: 4rem;
}
</style>
