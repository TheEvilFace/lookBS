<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-black-opacity" elevated>
      <q-toolbar class="row q-px-lg">
      <!--   Якори     -->
        <div class="col-4">
          <div class="row q-gutter-md-x-md fix-button-font">
            <q-btn href="#about" v-smooth-scroll no-caps flat>О Нас</q-btn>
            <q-btn href="#price" v-smooth-scroll  no-caps flat>Услуги</q-btn>
            <q-btn href="#examples" v-smooth-scroll no-caps flat>Примеры работ</q-btn>
            <q-btn href="#footer" v-smooth-scroll no-caps flat>Контакты</q-btn>
          </div>
        </div>
      <!--   Лого   -->
        <div class="col-4">
          <div class="q-my-md">
            <div class="row flex-center">
              <div class="col-md-3 col-sm-6">
                <img class="fit" src="../assets/lookLOGO.png" />
              </div>
            </div>
          </div>
        </div>
      <!--   Ссылки/Записаться   -->
        <div class="col-4 row reverse items-center">
          <div>
            <q-btn size="lg" class="text-weight-regular no-border-radius" color="primary" text-color="black" no-caps>Записаться</q-btn>
          </div>

          <div class="row q-gutter-x-md q-mr-lg">
            <q-icon size="sm" name="mdi-alpha-b-box"></q-icon>
            <q-icon size="sm" name="mdi-instagram"></q-icon>
            <q-icon size="sm" name="mdi-send"></q-icon>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="fix-margin-top">
      <router-view />
    </q-page-container>

    <q-footer>
      <q-toolbar class="bg-black">
        <div id="footer" class="row q-my-lg fit">
      <!--    Лого/ссылки      -->
          <div class="col-3">
              <div class="column flex-center">
                <div class="row flex-center">
                  <div class="col-md-3 col-sm-6">
                    <img class="fit" src="../assets/lookLOGO.png" />
                  </div>
                </div>
                <div class="row q-mt-md">
                  <q-icon class="q-mr-md" size="sm" name="mdi-alpha-b-box"></q-icon>
                  <q-icon class="q-mr-md" size="sm" name="mdi-instagram"></q-icon>
                  <q-icon size="sm" name="mdi-send"></q-icon>
                </div>
              </div>
          </div>

          <!--  Инфа о месте  -->
          <!--   Часы       -->
          <div class="col-3 ">
            <div class="column items-center">
              <div>
                <p class="text-weight-bold text-subtitle1">Время работы</p>
                <p class="text-subtitle1 q-mb-xs">Ежедневно с 10:00-20:00</p>
                <p class="text-subtitle1 q-mb-xs">Без выходных</p>
              </div>
            </div>
          </div>
          <!--   Локация       -->

          <div class="col-3">
            <div class="column items-center">
              <div>
                <p class="text-weight-bold text-subtitle1">Адрес</p>
                <p class="text-subtitle1 q-mb-xs">ул.Ленина, 21</p>
                <p class="text-subtitle1 q-mb-xs">Кировский район, Астрахань, 414000</p>
                <p class="text-subtitle1">+7-909-373-88-43</p>
              </div>

            </div>
          </div>
        </div>

      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    return {
    }
  }
})
</script>
