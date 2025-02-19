import { HSLA, toHslaString } from 'seemly'
import { defineComponent, PropType, h, inject } from 'vue'
import { colorPickerInjectionKey } from './ColorPicker'

export default defineComponent({
  name: 'ColorPickerTrigger',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: String as PropType<string | null>,
      default: null
    },
    hsla: {
      type: Array as unknown as PropType<HSLA | null>,
      default: null
    },
    onClick: Function as PropType<() => void>
  },
  setup (props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { colorPickerSlots, renderLabelRef } = inject(
      colorPickerInjectionKey,
      null
    )!
    return () => {
      const { hsla, value, clsPrefix, onClick } = props
      const renderLabel = colorPickerSlots.label || renderLabelRef.value
      return (
        <div class={`${clsPrefix}-color-picker-trigger`} onClick={onClick}>
          <div class={`${clsPrefix}-color-picker-trigger__fill`}>
            <div class={`${clsPrefix}-color-picker-checkboard`} />
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: hsla ? toHslaString(hsla) : ''
              }}
            />
            {value && hsla ? (
              <div
                class={`${clsPrefix}-color-picker-trigger__value`}
                style={{
                  color: hsla[2] > 50 || hsla[3] < 0.5 ? 'black' : 'white'
                }}
              >
                {renderLabel ? renderLabel(value) : value}
              </div>
            ) : null}
          </div>
        </div>
      )
    }
  }
})
