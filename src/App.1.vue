<template lang="pug">
  #app
    p(v-show="showValue") {{value}}
    p(v-if="showValue") {{value}}
    p(v-else-if="false") {{'algo mas'}}
    p(v-else) {{'lo ultimo'}}

    ul
      li(v-for="i in items") {{i}}

    input(v-model="name")
    p {{name}}

    a(v-bind:href="url") Link
    br
    input(v-model="name")
    input(v-model="lastName")

    p {{fullName}}
    br
    br
    h1 ¿Cual es tu fecha de nacimiento?
    br
    input(v-model="date" style="margin-left:16px" type="date")
    br
    br
    label Edad:{{ ageCalculated }}
      label(v-if="age")  {{ age === 1 ? 'Año' : 'Años'}}


</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Vue!',
      showValue: false,
      value: 'Algo',
      items: [1, 2, 3, 4, 5],
      name: '',
      lastName: '',
      url: 'https://platzi.com',
      date: new Date()
    }
    },
    computed: {
      fullName () {
        return `${this.name}  ${this.lastName}`
      },
  ageCalculated () {
      let bd = new Date(this.date)
      let time = Date.now() - bd.getTime()
      let age = new Date(time)
      if (age.getFullYear() - 1970 < 0) {
        return ''
      } else {
        return age.getFullYear() - 1970
      }
    }
    }
  }
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
