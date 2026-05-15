<template>
  <div class="app">
    <HeroSection />
    <!-- <AboutSection /> -->
    <SkillsSection />
    <!-- <ExperienceSection />
    <ProjectsSection />
    <ContactSection /> -->
  </div>
</template>

<script setup>
import HeroSection from '@/components/home/Hero.vue'
// import AboutSection from '@/components/about/AboutSection.vue'
import SkillsSection from '@/components/skills/Skills.vue'
// import ExperienceSection from '@/components/experience/ExperienceSection.vue'
// import ProjectsSection from '@/components/projects/ProjectsSection.vue'
// import ContactSection from '@/components/contact/ContactSection.vue'
</script>

<style>
.app {
  overflow-x: hidden;
}
</style>
