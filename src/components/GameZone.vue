<script lang="ts" setup>
import { computed, type PropType } from "vue";
import { Mode, type TMode } from "../util";

const props = defineProps({
  mode: {
    type: String as PropType<TMode>,
    required: false,
    default: Mode.Basic,
  },
});

const ImagesMap = computed(() => {
  if (props.mode === Mode.Advanced) {
    return {
      baseImg: "bg-pentagon",
      cornerImages: [
        "icon-rock",
        "icon-paper",
        "icon-scissors",
        "icon-lizard",
        "icon-paper",
      ],
    };
  } else {
    return {
      baseImg: "bg-triangle",
      cornerImages: ["icon-rock", "icon-paper", "icon-scissors"],
    };
  }
});
</script>

<template>
  <div>
    <img :src="`../../images/${ImagesMap.baseImg}.svg`" alt="" />
  </div>
</template>
