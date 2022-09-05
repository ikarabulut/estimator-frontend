<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EstimateSelectors',
  components: {},
  data() {
    return {
      pertSelected: false as boolean,
      triangulationSelected: false as boolean,
      pert: 'PERT',
      triangulation: 'TRIANGULATION',
    }
  },
  methods: {
    setPertButtonState() {
      if (this.pertSelected === false) {
        this.pertSelected = true
        this.pert = 'PERT (SELECTED)'
      } else {
        this.pertSelected = false
        this.pert = 'PERT'
      }
    },
    setTriangulationButtonState() {
      if (this.triangulationSelected === false) {
        this.triangulationSelected = true
        this.triangulation = 'TRIANGULATION (SELECTED)'
      } else {
        this.triangulationSelected = false
        this.triangulation = 'TRIANGULATION'
      }
    },
  },
})
</script>

<template>
  <div class="d-flex flex-row justify-content-center gx-4 gx-lg-5 my-4">
    <button
      data-test="pertButton"
      v-show="!triangulationSelected"
      @click="setPertButtonState()"
      type="button"
      class="btn btn-primary col-md-4 mx-4"
    >
      {{ pert }}
    </button>

    <button
      data-test="triangulationButton"
      v-show="!pertSelected"
      @click="setTriangulationButtonState()"
      type="button"
      class="btn btn-primary col-md-4 mx-4"
    >
      {{ triangulation }}
    </button>
  </div>
</template>
