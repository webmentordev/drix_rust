<template>
    <section class="w-full bg-center bg-cover min-h-screen relative flex items-center justify-center" style="background-image: url('/background.webp');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
        <div class="relative z-10 px-4">
            <h1 class="text-7xl text-white/90 mb-3 480px:text-4xl text-center"><span class="text-5xl">Welcome to</span> <br> DRIX's Energy Field</h1>
            <ul class="m-auto flex items-center justify-center">
                <NuxtLink class="mr-2 py-3 rounded text-white hover:bg-dark transition-all px-6 bg-main link text-xl inline-block" to="steam://connect/192.211.60.106:50930" target="_blank"><Icon name="bi:steam" class="text-2xl mr-1" /> Connect</NuxtLink>
                <NuxtLink class="mr-2 py-3 rounded text-white hover:bg-dark transition-all px-6 bg-main link text-xl inline-block" to="https://discord.gg/AwnNWdzgHX" target="_blank"><Icon name="fa6-brands:discord" class="text-2xl mr-1" /> Discord</NuxtLink>
            </ul>
        </div>
    </section>
</template>