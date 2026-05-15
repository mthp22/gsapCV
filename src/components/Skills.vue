<template>
  <section class="skills">
    <h2>Skills</h2>

    <div class="grid">
      <div v-for="(skill, i) in skills" :key="i" class="card" ref="cards">
        <h3>{{ skill.name }}</h3>
        <div class="bar">
          <div class="fill" :data-level="skill.level"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useCVStore } from '@/stores/cvStore'

const store = useCVStore()
const skills = store.skills

const cards = ref([])

onMounted(() => {
  gsap.from(cards.value, {
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.8,
  })

  gsap.to('.fill', {
    width: (i, el) => el.dataset.level + '%',
    duration: 1.2,
    delay: 0.3,
  })
})
</script>

<style scoped>
.skills {
  min-height: 100vh;
  padding: 5%;
}

.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.card {
  padding: 20px;
  background: #111;
  color: white;
  border-radius: 10px;
}

.bar {
  height: 6px;
  background: #333;
  margin-top: 10px;
}

.fill {
  height: 100%;
  width: 0%;
  background: limegreen;
}
</style>
