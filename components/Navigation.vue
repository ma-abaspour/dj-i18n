

<template>
  <header class="max-w-7xl mx-auto sticky top-0 z-10 flex h-16 items-center justify-center px-6 py-5 bg-white">
    <div class="mx-auto flex w-full items-center justify-between md:max-w-7xl">

      <!-- Logo and Title -->
      <NuxtLink to="/" class="flex items-center">
        <Icon name="local:logo" class="w-12 h-16"/>
      </NuxtLink>

      <!-- Navigation Links -->
      <div class="flex items-center space-x-6">
        <nav class="hidden items-center space-x-6 sm:flex">
          <NuxtLink to="/contact" class="text-sm font-medium text-zinc-700">
            About Us
          </NuxtLink>
        </nav>

        <!-- Divider -->
        <div class="hidden h-8 w-[3px] bg-zinc-200 dark:bg-zinc-800 sm:flex"></div>
        <LangSwitcher />

        <!-- Social Links and Theme Toggle -->
        <nav class="flex items-center justify-center gap-4">
          <ThemeToggle />
        </nav>

      </div>
    </div>
  </header>
</template>