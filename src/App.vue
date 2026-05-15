<template>
    <div class="site-layer">
      <nav class="navbar">
        <router-link class="logo" to="/">animatedCV</router-link>

        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/skills">Skills</router-link></li>
        </ul>
      </nav>

      <main class="route-stage">
        <router-view />
      </main>
    </div>
</template>

<script>

</script>

<style scoped>
    .site-layer {
  position: relative;
  z-index: 2;
  min-height: 100vh;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem clamp(1.25rem, 2vw, 2.2rem);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  background: linear-gradient(180deg, rgba(4, 5, 10, 0.72), rgba(4, 5, 10, 0.35));
}

.logo {
  color: #f7f0e4;
  text-decoration: none;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: clamp(0.82rem, 1.8vw, 0.96rem);
  font-family: 'Bodoni MT', 'Didot', serif;
}

.nav-links {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  gap: clamp(0.9rem, 2vw, 1.8rem);
}

.nav-links a {
  color: rgba(245, 239, 231, 0.94);
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #fff;
}
</style>