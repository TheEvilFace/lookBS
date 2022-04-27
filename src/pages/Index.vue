<template>
  <q-page>
    <section id="top" name="Top">
      <div class="flex relative-position">
        <div class="flex flex-center absolute-center z-fab">
          <p class="text-white text-h2 text-center q-mb-xl text-weight-bold">Мы не стремимся просто уронить волосы на пол, у нас есть свои принципы</p>
          <q-btn size="xl" class=" no-border-radius" color="primary" text-color="black" no-caps>Записаться</q-btn>
        </div>
        <img class="fit img-brightness" src="../assets/bg-main.jpg"/>
      </div>
    </section>

    <section id="about"  name="About">
      <div class="bg-black text-white q-py-xl">
        <div class="row">
          <div class="col-2"></div>
          <div class="col column flex-center">
            <h3>Идеология мужского салона!</h3>
            <h6 class="text-center text-">
              Мы не классический барбершоп, наша идея заключается в образе гостя ,
              подобрать ему ту или иную форму, стиль, поговорить и понять,
              что ему лучше подойдет под его ритм жизни.
            </h6>
            <h6>
              Стабильность, Комфортный ритм жизни, Максимальный рост, Контроль своей работы
            </h6>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </section>

    <section id="price"  name="Price">
      <div class="bg-secondary row justify-center q-py-xl">

        <div class="col-9">
          <img class="fit" src="../assets/Divider.png" />
        </div>

        <div class="col-12 flex flex-center">
          <h4 class="text-weight-bold">The Menu</h4>
        </div>

        <div class="col-6 row flex-center q-px-lg">
          <img class="fit" src="../assets/1.jpg"/>
        </div>

        <div class="col-6 row flex-center q-px-lg">
          <img class="fit" src="../assets/2.jpg" />
        </div>
        <div class="fit flex flex-center q-mt-lg">
          <q-btn class="no-border-radius" size="xl" color="black" text-color="secondary" no-caps>Записаться</q-btn>
        </div>

      </div>
    </section>

    <section id="test" name="TEST">
      <div class="flex">
        <img class="fit" src="../assets/test-back.jpg" />
      </div>
    </section>

    <section id="examples"  name="Examples">
      <div class="q-py-xl bg-primary">
        <div>
          <h4 class="full-width text-weight-bold text-center">Наши работы:</h4>
          <div class="row justify-center q-px-xl q-col-gutter-md">
            <div class="col-4">
              <img class="fit img-greyscale" src="../assets/alpha1.jpg"/>
            </div>

            <div class="col-4">
              <img class="fit img-greyscale" src="../assets/alpha2.jpg"/>
            </div>

            <div class="col-4">
              <img class="fit img-greyscale" src="../assets/alpha5.jpg"/>
            </div>

            <div class="col-4">
              <img class="fit img-greyscale" src="../assets/alpha3.jpg"/>
            </div>

            <div class="col-4">
              <img class="fit img-greyscale" src="../assets/alpha4.jpg"/>
            </div>

            <div class="col-4">
              <img class="fit img-greyscale" src="../assets/alpha6.jpg"/>
            </div>

          </div>


        </div>
      </div>
    </section>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
