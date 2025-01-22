<template>

<Navigation />

<!-- Hero Section -->
<div class="max-w-5xl mx-auto mt-20 py-12 text-black ">
    <h1 class="text-5xl font-extrabold leading-tight mb-6 text-black">
      {{ $t('HeroTitle') }}
    </h1>
    <p class="text-lg lg:text-2xl text-black mb-8 max-w-3xl">
      {{ $t('HeroDescription') }}
    </p>
    <div class="flex gap-6">
      <a href="https://drive.google.com/uc?export=download&id=1scxNy7ffALQGIsJ8O9VBCV-au-0wL18e" target="_blank" class="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition ease-in-out duration-300 mb-4">
        Download Our English Catalog
      </a>
      <a href="https://drive.google.com/uc?export=download&id=1CoQWAYI-bYzx-guQEPraamNKZd6HaHR9" target="_blank" class="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition ease-in-out duration-300 mb-4">
        Download Our Arabic Catalog
      </a>
    </div>
</div>




<section class="py-16 bg-white">
  <div class="container max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      
      <NuxtLink to="/products/rebar" class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
          <icon name="icon-park-outline:heavy-metal" class="w-8 h-8" />
        </div>
        <h3 class="text-lg font-semibold">Rebar</h3>
        <p class="text-gray-600">High-quality steel reinforcement bars.</p>
      </NuxtLink>

      <NuxtLink to="/comingsoon" class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
          <icon name="cbi:soil-moisture" class="w-8 h-8" />
        </div>
        <h3 class="text-lg font-semibold">Iron Ore</h3>
        <p class="text-gray-600">Premium grade iron ore for industrial use.</p>
      </NuxtLink>

      <NuxtLink to="/comingsoon" class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mb-4">
          <icon name="icon-park-outline:floor-tile" class="w-8 h-8" />
        </div>
        <h3 class="text-lg font-semibold">Ceramic Tile</h3>
        <p class="text-gray-600">Durable and stylish ceramic tiles.</p>
      </NuxtLink>

      <NuxtLink to="/comingsoon" class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mb-4">
          <icon name="emojione-v1:building-construction" class="w-16 h-16" />
        </div>
        <h3 class="text-lg font-semibold">Construction Material</h3>
        <p class="text-gray-600">Essential materials for construction projects.</p>
      </NuxtLink>

      <NuxtLink to="/comingsoon" class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4">
          <icon name="mdi:truck" class="w-8 h-8" />
        </div>
        <h3 class="text-lg font-semibold">Logistics</h3>
        <p class="text-gray-600">Efficient and reliable logistics services.</p>
      </NuxtLink>

      <NuxtLink to="/comingsoon" class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center mb-4">
          <icon name="mdi:factory" class="w-8 h-8" />
        </div>
        <h3 class="text-lg font-semibold">Manufacturing</h3>
        <p class="text-gray-600">High-quality manufacturing solutions.</p>
      </NuxtLink>

      <NuxtLink to="/comingsoon" class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mb-4">
          <icon name="mdi:warehouse" class="w-8 h-8" />
        </div>
        <h3 class="text-lg font-semibold">Warehousing</h3>
        <p class="text-gray-600">Secure and spacious warehousing options.</p>
      </NuxtLink>

      <NuxtLink to="/comingsoon" class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mb-4">
          <icon name="mdi:shipping-pallet" class="w-8 h-8" />
        </div>
        <h3 class="text-lg font-semibold">Shipping</h3>
        <p class="text-gray-600">Fast and reliable shipping services.</p>
      </NuxtLink>

    </div>
  </div>
</section>


  <section class="bg-white py-20">
  <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-0">
    <!-- Left Side -->
    <div class="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
      <h2 class="text-4xl font-extrabold text-gray-800 sm:text-5xl mb-8">Our Competitive Advantages</h2>
      <ul class="space-y-6">
        <li v-for="(text, i) in [
              'Extensive supply network',
              'Expert trade team',
              'Quality assurance',
              'Competitive pricing',
              'Fast delivery',
              'International standards compliance'
            ]" :key="i" class="flex items-center">
          <span class="w-8 h-8 bg-teal-500 text-white flex items-center justify-center rounded-full font-bold mr-4">{{ i + 1 }}</span>
          <p class="text-lg text-gray-700 font-medium">{{ text }}</p>
        </li>
      </ul>
    </div>

    <!-- Right Side -->
    <div class="lg:w-1/2 flex justify-center">
      <div class="relative w-80 h-80 bg-teal-500 rounded-full shadow-lg">
        <div class="absolute top-8 left-8 w-64 h-64 bg-teal-400 rounded-full"></div>
        <div class="absolute top-16 left-16 w-48 h-48 bg-teal-300 rounded-full"></div>
        <div class="absolute top-24 left-24 w-32 h-32 bg-teal-200 rounded-full"></div>
        <div class="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
        <Icon name="bi-award" style="color: white" class="w-16 h-16" />
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />

</template>

<script setup>
</script>


