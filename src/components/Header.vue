<script setup>

</script>
<template>
    <header class="sticky top-0 z-20 border-b border-gray-200  bg-white/80 backdrop-blur-xs ">
        <nav class="flex items-center justify-between h-16 px-10 sm:px-20 py-2">
            <div class="text-xl font-bold">
                <a href="#" class="text-gray-800 hover:text-gray-600">
                    <img src="../images/logoPierre.png" alt="" srcset="" class="w-20 h-20 rounded-full">
                </a>
            </div>
            <button class="flex flex-col gap-1 p-2 md:hidden">
                <span class="block w-6 h-0.5 bg-gray-800"></span>
                <span class="block w-6 h-0.5 bg-gray-800"></span>
                <span class="block w-6 h-0.5 bg-gray-800"></span>
            </button>
            <ul class="hidden md:flex gap-4">
                <!-- <li><a href="#" class="text-gray-800 hover:text-gray-600">Inicio</a></li>
                <li><a href="#" class="text-gray-800 hover:text-gray-600">Servicios</a></li> -->
                <li><a href="https://www.pierrecardin.com.sv/" class="bg-black px-3 py-2 rounded-lg text-white flex gap-2 uppercase">Comprar<img src="../images/bag-shopping.svg" alt="" srcset="" class="w-4 invert-100"></a></li>


            </ul>
        </nav>
    </header>
</template>



<style scoped>
/* No se requiere CSS adicional, todo está manejado con TailwindCSS */
</style>
