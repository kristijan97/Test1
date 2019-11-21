<template>
    <div id="app">
        <full-page ref="fullpage" :options="{}">
            <div class="section">
                <customA v-if="game"></customA>
                <customB v-else></customB>
                {{ game }}
                <button @click="changeGame">Test</button>
                <button @click="rebuild">rebuild</button>
            </div>
        </full-page>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      game: false
    }),
    methods: {
      changeGame() {
        this.game = !this.game;
      },
      rebuild() {
        this.$refs.fullpage.api.reBuild();
      }
    }
  }
</script>
