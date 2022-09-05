<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputField',
  components: {},
  data() {
    return {
      optimistic: 0,
      pessimistic: 0,
      mostLikely: 0,
      clicked: false as boolean,
    }
  },
  methods: {
    generateEstimate() {
      this.clicked = true
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
  <button
    data-test="saveButton"
    v-show="clicked"
    type="submit"
    class="btn btn-outline-success btn-sm"
  >
    Save?
  </button>
</template>
