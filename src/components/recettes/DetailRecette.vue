<template>
  <div class="container">
      <div>
          <div class="d-flex justify-content-between my-3 mb-4">
              <h4 class="text-danger fw-bold">Détails de la Recette</h4>
              <router-link to="/recette" class="btn btn-danger">Liste des Recettes</router-link>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <p class="form-control bg-light">{{ form.type }}</p>
                  <!-- <p class="form-control bg-light">{{ form.customer_name }}</p> -->
              </div>
              <!-- <div class="col-md-6">
                  <p class="form-control bg-light">{{ form.delivery_address }}</p>
                  <p class="form-control bg-light">{{ form.track_number }}</p>
                  <p class="form-control bg-light">{{ form.status }}</p>
              </div> -->
          </div>
      </div>
  </div>
</template>

<script setup>
import { useRecetteStore } from '@store'
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const t = useI18n()
const store = useRecetteStore()
const router = useRouter()
const route = useRoute()

const id = route.params.id
const form = store.getById(id)


onMounted(() => {
  store.loadDataFromApi();
});
</script>