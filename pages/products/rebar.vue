
<template>
  <div class="bg-gray-50 w-full min-h-screen">
    <Navigation />

    <!-- Hero Section -->
    <section class="max-w-5xl mx-auto mt-20 px-4">
      <div class="flex flex-col md:flex-row items-start">
        <!-- Image Grid -->
        <div class="grid grid-cols-2 gap-4 md:w-1/2">
          <NuxtImg src="/images/rebar-1.jpg" class="rounded-lg shadow-lg object-cover w-full h-full" />
          <NuxtImg src="/images/rebar-2.jpg" class="rounded-lg shadow-lg object-cover w-full h-full" />
          <NuxtImg src="/images/rebar-3.jpg" class="rounded-lg shadow-lg object-cover w-full h-full" />
          <NuxtImg src="/images/rebar-4.jpg" class="rounded-lg shadow-lg object-cover w-full h-full" />
        </div>

        <!-- Product Information -->
        <div class="mt-8 md:mt-0 md:ml-12 md:w-1/2">
          <h1 class="text-4xl font-bold text-gray-900">Rebar</h1>
          <p class="mt-4 text-lg text-gray-700">Our premium rebar offers unmatched strength and durability, making it ideal for construction projects of any scale. Designed to meet industry standards, this rebar ensures structural integrity and long-term performance.</p>
          <a
            href="https://wa.me/+96894797953" 
            target="_blank"
            class="mt-6 flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
            <Icon name="mdi:whatsapp" class="w-5 h-5 mr-2" />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="max-w-5xl mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">About Premium Rebar</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        Premium rebar is designed to meet the needs of modern construction, ensuring safety, durability, and cost-effectiveness. It is crafted using advanced manufacturing techniques and subjected to rigorous quality checks to maintain its high standard.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        Whether you are working on small-scale residential projects or large commercial developments, our premium rebar is versatile enough to adapt to any application. Its corrosion resistance and strength make it a reliable choice for both short-term and long-term use.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        Choose premium rebar for your next project and experience the blend of quality and performance that sets us apart. Contact us today to learn more about how our products can support your construction needs.
      </p>
    </section>

    <!-- Properties Section -->
    <section class="max-w-5xl mx-auto px-4 py-12">
      <div class="flex flex-col md:flex-row items-start">
        <!-- Text Section -->
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Rebar Properties</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            Our rebar is crafted to deliver exceptional performance, offering unmatched strength and versatility for any construction project. These properties ensure that it meets the most demanding requirements of modern construction standards.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">Here are the key properties of our premium rebar that make it the perfect choice for your project.</p>
        </div>

        <!-- Properties Grid -->
        <div class="md:w-1/2 md:ml-12 mt-8 md:mt-0">
          <div class="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <div class="flex justify-between border-b pb-2">
              <span class="text-gray-700 font-medium">Material</span>
              <span class="text-gray-900">High-grade steel</span>
            </div>
            <div class="flex justify-between border-b pb-2">
              <span class="text-gray-700 font-medium">Tensile Strength</span>
              <span class="text-gray-900">500 MPa</span>
            </div>
            <div class="flex justify-between border-b pb-2">
              <span class="text-gray-700 font-medium">Corrosion Resistance</span>
              <span class="text-gray-900">Excellent</span>
            </div>
            <div class="flex justify-between border-b pb-2">
              <span class="text-gray-700 font-medium">Length</span>
              <span class="text-gray-900">Up to 12 meters</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-700 font-medium">Diameter</span>
              <span class="text-gray-900">6mm - 40mm</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />

  </div>
</template>



<!-- <img src="https://picsum.photos/400/300?random=4" alt="Image 4" class="w-full h-full object-cover rounded-lg" /> -->