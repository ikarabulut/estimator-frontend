<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'InputField',
  components: {},
  data() {
    return {
      optimistic: 0 as string | number,
      pessimistic: 0 as string | number,
      mostLikely: 0 as string | number,
      estimateParams: {
        optimistic: this.optimistic,
        mostlikely: this.mostLikely,
        pessimistic: this.pessimistic,
      },
      calculatedEstimate: null,
      clicked: false as boolean,
      saveClicked: false as boolean,
    }
  },
  methods: {
    async generateEstimate() {
      this.saveClicked = false
      this.clicked = true
      const response = await axios.post('https://localhost:7015/pert/quick', {
        optimistic: this.optimistic,
        mostlikely: this.mostLikely,
        pessimistic: this.pessimistic,
      })
      this.calculatedEstimate = response.data
      console.log('calculated estimate: ' + this.calculatedEstimate)
    },
    async saveEstimate() {
      await axios.post('https://localhost:7015/pert', this.estimateParams)
      console.log('estimate saved')
      this.saveClicked = true
    },
  },
})
</script>

<template>
  <div class="row gx-4 gx-lg-5 mx-4 my-4">
    <div class="col-md-4">
      <div data-test="optimisticCard" class="card">
        <div class="card-body">
          <h2 class="card-title">Optimistic</h2>
        </div>
        <div class="card-footer">
          <input type="text" v-model="optimistic" />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div data-test="mostLikelyCard" class="card">
        <div class="card-body">
          <h2 class="card-title">Most Likely</h2>
        </div>
        <div class="card-footer">
          <input type="text" v-model="mostLikely" />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div data-test="pessimisticCard" class="card">
        <div class="card-body">
          <h2 class="card-title">Pessimistic</h2>
        </div>
        <div class="card-footer">
          <input type="text" v-model="pessimistic" />
        </div>
      </div>
    </div>
  </div>
  <button
    data-test="calculateButton"
    type="button"
    @click="generateEstimate()"
    class="btn btn-primary mt-2 mb-4"
  >
    Calculate Estimate
  </button>

  <span v-show="clicked">
    <p v-show="!saveClicked" data-test="calculatedEstimate">
      Estimate = {{ calculatedEstimate }}
    </p>
    <button
      v-show="!saveClicked"
      data-test="saveButton"
      @click="saveEstimate()"
      type="submit"
      class="btn btn-outline-success btn-sm"
    >
      Save?
    </button>
    <p v-show="saveClicked">Estimate saved!</p>
  </span>
</template>
