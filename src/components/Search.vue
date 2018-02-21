<template lang="pug">
  main
    
    transition(name="move")
      pm-notification(v-show="showNotification")
        p(slot="body") No se encontraron Resultados

    transition(name="move")
      pm-loader(v-show="isLoading")
    
    section.section
      nav.nav
             
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar...", 
            v-model="searchQuery",
            v-on:keyup.enter="search"
            )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
           
      .container
      p
        small {{searchMessage}}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            pm-track(
              v-blur="t.preview_url",
              v-bind:class="{'is-active': t.id === selectedTrack}",
              v-bind:track="t", 
              v-on:select="setSelectedTrack")
    
</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  components: {PmTrack, PmLoader, PmNotification},
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
    },
    methods: {
      search () {
        this.isLoading = true
          if (this.searchQuery === '') { return }
          trackService.search(this.searchQuery)
          .then(res => {
            this.showNotification = res.tracks.total === 0
            this.tracks = res.tracks.items
            this.isLoading = false
           })
      },
      setSelectedTrack (id) {
        this.selectedTrack = id
      }
    },
    computed: {
      searchMessage () {
        return `Encontraods: ${this.tracks.length}`
      }
    },

      watch: {
        showNotification () {
          if (this.showNotification) {
            setTimeout(() => {
              this.showNotification = false
            }, 3000)
          }
        }
      }
  }
</script>

<style lang="scss">
 
  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
