
<template>
  <div class="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col justify-center items-center text-center px-6 py-12 sm:px-8">
    <div class="max-w-lg w-full space-y-6">
      <!-- Main heading -->
      <h1 class="text-5xl font-bold text-white tracking-tight sm:text-6xl animate-fadeIn">
        We're Building Something Amazing
      </h1>
      <p class="text-xl text-white opacity-80 animate-fadeIn animate-delay-200">
        Our team is working hard behind the scenes. Stay tuned for the launch of our new project.
      </p>

      <!-- Email Signup / Call to Action -->
      <div class="mt-6 max-w-md w-full mx-auto space-y-4">
        <input
          type="email"
          class="block w-full px-5 py-3 rounded-md text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
          placeholder="Enter your email to stay updated"
        />
        <button class="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-5 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none">
          Notify Me
        </button>
      </div>

      <!-- Footer -->
      <footer class="mt-8 text-sm text-white opacity-70">
        <p>&copy; 2025 Dariush International Trade. All Rights Reserved.</p>
        <p>Designed with 💙.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
// Script section is left empty for this static page.
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-delay-200 {
  animation-delay: 200ms;
}
</style>
