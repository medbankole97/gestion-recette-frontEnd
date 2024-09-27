<!-- <template>
  <div class="container">
    <nav>
      <router-link to="/recette" class="btn btn-outline-dark"><i class="fa-solid fa-arrow-left"></i></router-link>
    </nav>
    <h2 class="text-center">Pour de bons desserts <br> Ou simplement l'envie de vous faire plaisir <i class="fa-solid fa-face-smile"></i></h2>
    <div class="row gx-3 gy-3 mt-5">
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/ananas.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Tarte à l'ananas</h5>
          <p class="card-text">pâte à sucre, ananas caramélisé, cerise, miel</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/beignet.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Beignets</h5>
          <p class="card-text">farine, oeuf, coco rapé, lait, beurre</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/bonbon.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Madeleine</h5>
          <p class="card-text">farine, sucre, oeuf, lait, beurre</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/brioche.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Brioche</h5>
          <p class="card-text">farine, sucre, oeuf, lait, beurre</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/cake_choc.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Cake chocolat</h5>
          <p class="card-text">farine, oeuf, lait, chocolat, crème au beurre </p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/choc.webp" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Tarte au chocolat</h5>
          <p class="card-text">pâte à sucre, chocolat, crème chocolat</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/chocolat.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Mini cake</h5>
          <p class="card-text">pâte au chocolat, crème au chocolat, fruits rouges</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/crepe.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Crepe</h5>
          <p class="card-text">farine, sucre, oeuf, lait, beurre</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/chouquette.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Chouquette</h5>
          <p class="card-text">farine, sucre, oeuf, beurre</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/donut (2).jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Donut</h5>
          <p class="card-text">farine, sucre, oeuf, lait, beurre, chocolat</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/galette.webp" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Galette de Roi</h5>
          <p class="card-text">farine, sucre, oeuf, lait, beurre, sucre glace</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/gateau.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Cake</h5>
          <p class="card-text">farine, sucre, oeuf, lait, beurre, sucre glace</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/tarte_fruit.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Tarte au Fruit</h5>
          <p class="card-text">pâte à sucre, fruits au choix, crème au beurre</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/tiramisu.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Tiramisu</h5>
          <p class="card-text">langues de chat, café, crème au café, cacao</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/tarte_fraise.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Tarte à la fraise</h5>
          <p class="card-text">pâte à sucre, fruits rouges, crème au beurre</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/pommes.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Tarte aux pommes</h5>
          <p class="card-text">pâte à sucre, pomme caramélisé, crème au beurre</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/pancake.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Pancake</h5>
          <p class="card-text">farine, sucre, oeuf, beurre, yaourt, miel</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/pain.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Pain au lait</h5>
          <p class="card-text">farine, sel, sucre, oeuf, lait</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/nugget.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Churros</h5>
          <p class="card-text">farine, sucre, oeuf, lait, beurre, sucre glace</p>
        </div>
      </div>
      <div class="col-4 card me-4 mb-3 p-0" style="width: 21rem;">
        <img src="/src/assets/patisserie/gauffre.jpg" class="card-img-top" alt="recette">
        <div class="card-body">
          <h5 class="card-title">Gauffres</h5>
          <p class="card-text">farine, sucre, oeuf, lait, beurre, sucre glace</p>
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
</style> -->