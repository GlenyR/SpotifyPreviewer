<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
          .container
            .navbar-left
              .navbar-item
                  strong Spotify Previewer
              .navbar-right.navbar-menu
                router-link.navbar-item(to="/") Buscar
                router-link.navbar-item(to="about") About
    .hero-body
      .container.has-text-centered
        h1.title Spotify Previewer
        h2.subtitle Search a Song DIRECTIVAS PERSONALIZADAS 36
        PmPlayer

</template>

<script>
import PmPlayer from '@/components/Player.vue'
  export default {
    components: {PmPlayer}

  }
</script>