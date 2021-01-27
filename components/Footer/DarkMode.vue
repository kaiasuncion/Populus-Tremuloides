<template>
  <div class="mode-wrapper">
    <ul>
      <li v-for="(mode, index) of modes" :key="mode + index">
        <component
          :is="`${mode}-icon`"
          v-show="$colorMode.preference === mode"
          class="icon-mode cursor-pointer"
          @click="selectColorMode()"
        />
      </li>
    </ul>
    <!-- catch -->
    <SystemIcon
      v-show="$colorMode.preference === undefined || null"
      class="cursor-pointer"
      @click="selectColorMode()"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DarkIcon from '@/assets/icons/dark.svg?inline'
import LightIcon from '@/assets/icons/light.svg?inline'
import SystemIcon from '@/assets/icons/system.svg?inline'

export default Vue.extend({
  components: {
    DarkIcon,
    LightIcon,
    SystemIcon,
  },
  data() {
    return {
      modes: ['system', 'dark', 'light'],
      currentIndex: 0,
    }
  },
  methods: {
    // checks which mode is active via index
    // I would like to find a better way to implement this
    selectColorMode() {
      this.currentIndex += 1
      if (this.currentIndex === 0) {
        this.$colorMode.preference = 'system'
      } else if (this.currentIndex === 1) {
        this.$colorMode.preference = 'dark'
      } else if (this.currentIndex === 2) {
        this.$colorMode.preference = 'light'
      } else {
        this.currentIndex = 0
        this.$colorMode.preference = 'system'
      }
    },
  },
})
</script>

<style lang="scss">
.mode-wrapper {
  padding: 0.5rem;
  border-radius: 100%;
  .icon-mode {
    height: 3rem;
    fill: var(--color-primary);
  }
}
</style>
