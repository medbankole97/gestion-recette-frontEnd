<template>
  <div class="container">
    <nav>
      <router-link to="/recette" class="btn btn-outline-dark"><i class="fa-solid fa-arrow-left"></i></router-link>
    </nav>
    <h2 class="text-center">Au cas où vous manquez d'inspiration, <br> Nous avons pensé à vous <i class="fa-solid fa-face-smile"></i></h2>
    <div class="row gx-3 gy-3 mt-5">
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/bolognaise.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Bolognaise</h5>
          <p class="card-text">spaghetti, viande hachée, tomate, oignons, épices</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/boulette.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Boulette farcie</h5>
          <p class="card-text">viande hachée, oeufs, épices</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/brochette.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Brochette</h5>
          <p class="card-text">poulet, sauce barbecue, épices</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/braisee.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Poisson braisé</h5>
          <p class="card-text">poisson, épices, oignons</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/burger.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Hamburger</h5>
          <p class="card-text">pain burger, viande ou poulet, salade, tomate, fromage</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/calamar.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Calamar Pané</h5>
          <p class="card-text">calamar, épices, farine, oeuf, lait</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/crevette.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Crevette Pané</h5>
          <p class="card-text">crevette, épices, farine, oeuf, lait</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/cup-salty.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Cupcake Salé</h5>
          <p class="card-text">farine, oeuf, lait, beurre, épices, jambon, légumes</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/entree_poulet.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Entrée Poulet</h5>
          <p class="card-text">poulet, frites, tomate, salade</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/kebab.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Kebab</h5>
          <p class="card-text">viande rôti, frites</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/lasagne.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Lasagne</h5>
          <p class="card-text">feuille de lasagne, béchamel, viande hachée, purée tomate, fromage</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/omelette.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Omelette</h5>
          <p class="card-text">oeufs, jambon, fromage, légumes, lait</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/pizza2.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Pizza</h5>
          <p class="card-text">pâte à pizza, sauce viande hachée, fromage, olive</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/poisson pané.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Poisson pané</h5>
          <p class="card-text">poisson, épices, farine, oeuf, lait</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/ragout.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Ragout</h5>
          <p class="card-text">viande, légumes, purée de tomate, épices</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/salad.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Salade</h5>
          <p class="card-text">lettue, tomate, mozzarella, pois chiche</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/soupe.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Soupe Calamar</h5>
          <p class="card-text">calamar, légumes, pois chiche, farine</p>
        </div>
      </div>
      <div class="col-4 card me-3 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/cuisine/tacos.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">pain arabe, viande, frites, salade, tomate</h5>
          <p class="card-text">poisson, frites, poireau, tomate</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.card-img-top {
  width: 100%;
  height: 15rem;
}
</style>