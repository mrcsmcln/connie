<template>
  <Html class="h-full">
    <Head>
      <Title>Connie & Marcus</Title>
      <Meta name="description" content="Just a cute lil’ site for us ❤️" />
      <Meta property="og:image" content="/og.png" />
      <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <Body
      class="h-full bg-gray-50 transition-colors duration-500 dark:bg-gray-900" />
  </Html>
  <main
    class="relative flex min-h-full flex-col items-center justify-center overflow-hidden">
    <transition
      enter-from-class="opacity-0"
      enter-active-class="duration-1000 transition-opacity ease-in-out"
      leave-active-class="!absolute transition-opacity duration-1000 ease-in-out"
      leave-to-class="opacity-0">
      <div
        :class="{ '!opacity-0': state < 2 }"
        class="relative mx-auto mt-6 flex max-w-screen-sm flex-col px-4 py-12 sm:px-6 lg:max-w-screen-md lg:px-8 lg:py-24">
        <div
          class="pointer-events-none absolute -right-12 top-8 text-8xl opacity-10 transition-opacity duration-1000 lg:top-12 lg:text-9xl">
          🐿
        </div>
        <div class="relative">
          <div
            :class="{ 'opacity-0': state < 1 }"
            class="self-start text-lg font-medium leading-6 text-gray-900 duration-1000 selection:bg-blue-400 dark:text-white dark:selection:bg-blue-600 dark:selection:text-gray-900">
            It's been…
          </div>
          <dl
            class="mt-5 grid grid-cols-2 gap-5 duration-1000 sm:landscape:grid-cols-3"
            :class="[
              { 'opacity-0': state < 2 },
              Object.keys(diff).length === 6
                ? 'lg:grid-cols-6 lg:landscape:grid-cols-6'
                : 'lg:grid-cols-5 lg:landscape:grid-cols-5'
            ]">
            <div
              v-for="(value, unit) in diff"
              :key="unit"
              class="w-[100px] overflow-hidden rounded-lg bg-white px-4 py-5 shadow transition-colors duration-500 dark:bg-gray-800 sm:w-[108px] sm:p-6">
              <dd
                class="text-3xl font-semibold text-gray-900 transition-colors duration-500 selection:bg-blue-400 dark:text-white dark:selection:bg-blue-600 dark:selection:text-gray-900"
                v-text="parseInt(value)" />
              <dt
                class="mt-1 truncate text-sm font-medium text-blue-600 transition-colors duration-500 selection:bg-blue-400 selection:text-gray-900 dark:text-blue-400 dark:selection:bg-blue-600"
                v-text="parseInt(value) === 1 ? unit.slice(0, -1) : unit" />
            </div>
          </dl>
          <div
            :class="{ 'opacity-0': state < 3 }"
            class="mt-5 self-end text-right text-lg font-medium leading-6 text-gray-900 duration-1000 selection:bg-blue-400 dark:text-white dark:selection:bg-blue-600 dark:selection:text-gray-900">
            …since we met{{ useYears ? '.' : '!' }}
            <HeartIcon
              v-if="!useYears"
              class="inline-block h-6 w-6 fill-red-400 align-bottom" />
          </div>
        </div>
      </div>
      <!-- <div
        v-else
        class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8"
      >
        <h2
          class="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl"
        >
          <span class="block lg:inline">Will you be my </span>
          <span class="block lg:inline">girlfriend already?</span>
        </h2>
      </div> -->
    </transition>
  </main>
</template>

<script setup>
import { DateTime } from 'luxon'
import { HeartIcon } from '@heroicons/vue/24/solid'

const then = DateTime.local(2023, 3, 16, 21, 26, { zone: 'America/New_York' })
const useYears = DateTime.local() - then.plus({ years: 1 }) > 0

function getDiff() {
  return then
    .diff(
      DateTime.local(),
      ['months', 'days', 'hours', 'minutes', 'seconds'].concat(
        useYears ? ['years'] : []
      )
    )
    .normalize()
    .negate()
    .toObject()
}

// function increment() {
//   state.value += 1;
// }

function update() {
  diff.value = getDiff()

  // if (unref(state) !== 4) {
  window.requestAnimationFrame(update)
  // }
}

const diff = ref(getDiff())
const state = ref(5) // ref(useYears ? 0 : 3);

onMounted(() => {
  update()

  //   if (useYears) {
  //     setTimeout(increment, 1000);
  //     setTimeout(increment, 3000);
  //     setTimeout(increment, 8000);
  //     setTimeout(increment, 13000);
  //   }
})
</script>

<style>
#__nuxt {
  @apply h-full;
}
</style>
