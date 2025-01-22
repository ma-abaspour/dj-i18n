<template>
  <div class="relative">
    <select
      @change="switchLanguage"
      :value="locale"
      class="block w-full p-2.5 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option v-for="lang in locales" :key="lang.code" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();
const switchLanguage = (event) => setLocale(event.target.value);
</script>
