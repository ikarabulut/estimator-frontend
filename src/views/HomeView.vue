<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import EstimateSelectors from '../components/EstimateSelectors.vue'
import InputField from '../components/InputField.vue'
</script>

<template>
  <main class="container-fluid text-center">
    <NavBar />

    <div class="card text-white bg-secondary my-4">
      <div class="card-body">
        <p class="text-white m-0">Select Your Estimate Type</p>
      </div>
    </div>

    <EstimateSelectors />
    <InputField />

    <footer class="py-3 bg-dark">
      <div class="container px-4 px-lg-5 bg-dark">
        <p class="text-center text-white">Copyright &copy; Mavi 2022</p>
      </div>
    </footer>
  </main>
</template>
