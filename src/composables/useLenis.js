// src/composables/useLenis.js
import { onMounted, onUnmounted } from 'vue'
import Lenis from '@studio-freight/lenis'

export function useLenis(options = { duration: 1.2, smooth: true }) {
  let lenis = null

  onMounted(() => {
    lenis = new Lenis(options)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  onUnmounted(() => {
    if (lenis) lenis.destroy()
  })

  // Retornamos una función para acceder a la instancia
  return () => lenis
}
