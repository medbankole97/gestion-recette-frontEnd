<template>
  <nav class="navbar bg-white px-5">
    <router-link to="/">
      <img src="/src/assets/logo.png" alt="Logo" class="logo">
    </router-link>
    <form class="d-flex justify-content-around px-5">
      <router-link to="/recette/patisserie" class="btn btn-outline-none me-3">Patisserie</router-link>
      <router-link to="/recette/cuisine" class="btn btn-outline-none">Cuisine</router-link>
    </form>
  </nav>
  <div class="container-fluid">
    <h2> Liste des recettes </h2>
    <div class="d-flex justify-content-end mb-4 ">
      <router-link to="/recette/new" class="btn btn-danger "><i class="fa-solid fa-plus"></i> Nouvelle
        Recette</router-link>
    </div>
    <div class="contact-list-table">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
          <th scope="col">#</th>
          <th scope="col">Titre</th>
          <th scope="col">Ingredients</th>
          <th scope="col">Type</th>
          <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="store.recettes.length === 0">
            <td colspan="5">No data</td>
          </tr>
          <tr v-for="item in store.recettes" :key="item.id">
            <td scope="row">{{ `# ${item.id} ` }}</td>
            <td>{{ item.titre }}</td>
            <td>{{ item.ingredients }}</td>
            <td>{{ item.type }}</td>
            <td>
              <button class="btn btn-xs btn-danger me-4" @click="destroy(item.id)">
                <i class="fa-solid fa-trash"></i>
              </button>
              <router-link :to="`/recette/edit/${item.id}`" class="btn btn-xs btn-primary me-4">
                <i class="fa-solid fa-pen-to-square"></i>
              </router-link>
              <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
                @click="view(item)">
                <i class="fa-solid fa-eye"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="isVisible" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold text-center text-danger" id="exampleModalLabel">Details de la recette </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><span class="fw-bold">Titre :</span> {{ current.titre }}</p>
              <p><span class="fw-bold">Ingredients : </span>{{ current.ingredients }}</p>
              <p><span class="fw-bold">Type : </span>{{ current.type }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRecetteStore } from '@store'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useRecetteStore()
const router = useRouter()

const destroy = (id) => {
  store.destroy(id)
}

const current = ref(null)
const isVisible = ref(false)

const view = (recette) => {
  isVisible.value = true
  current.value = recette
}


</script>

<style scoped>
.logo {
  width: 60px;
}

.container-fluid {
  padding: 10px 10em;
}
</style>