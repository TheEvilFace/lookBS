import { boot } from 'quasar/wrappers'
import VueSmoothScroll from 'vue3-smooth-scroll'


export default boot(async ({ app } ) => {
  app.use(VueSmoothScroll,{
    duration: 1000,       // animation duration in ms
    updateHistory: false, // whether to push hash to history
    offset:-138
  })
})
