<markdown>
# 自定义渲染

使用 `render-label` 可以批量控制 cascader 菜单的选项渲染。
</markdown>

<template>
  <n-cascader
    v-model:value="value"
    placeholder="没啥用的值"
    :options="options"
    :filterable="true"
    :render-label="renderLabel"
    @update:value="handleUpdateValue"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { CascaderOption } from 'naive-ui'

function getOptions (depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, '' + String(i))
      })
    } else if (iterator === depth) {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    } else {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

export default defineComponent({
  setup () {
    return {
      value: ref(null),
      options: getOptions(),
      handleUpdateValue (...args) {
        console.log(...args)
      },
      renderLabel (option) {
        return `prefix ${option.label}`
      }
    }
  }
})
</script>
