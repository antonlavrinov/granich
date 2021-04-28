import React, { useEffect, useState, useRef, memo } from "react"
import * as SC from "./QandAItem"
import PlusImage from "../../../../assets/images/plus.png"
import MinusImage from "../../../../assets/images/minus.png"
import { useSpring, a } from "react-spring"
import ResizeObserver from "resize-observer-polyfill"

const toggle = {
  cursor: "pointer",
  verticalAlign: "middle",
}

//helpers
function usePrevious(value) {
  const ref = useRef()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [{ ref }, bounds]
}

const QandAItem = memo(
  ({ type, children, tag, style, open, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(open === 0 ? true : defaultOpen)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
      to: {
        height: isOpen ? viewHeight : 0,
        opacity: isOpen ? 1 : 0,
        transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
      },
    })
    return (
      <SC.ItemFrame type={type ? 1 : 0}>
        <SC.Container type={type ? 1 : 0} onClick={() => setOpen(!isOpen)}>
          <SC.TagColumn>
            <SC.Tag type={type ? 1 : 0}>{tag}</SC.Tag>
          </SC.TagColumn>
          <SC.Line type={type ? 1 : 0} />
          {!isOpen ? (
            // <Plus style={{ ...toggle, opacity: children ? 1 : 0.3 }} />
            <img
              style={{ ...toggle, opacity: children ? 1 : 0.3 }}
              src={PlusImage}
              alt="plus"
            />
          ) : (
            // <Minus style={{ ...toggle, opacity: children ? 1 : 0.3 }}/>
            <img
              style={{ ...toggle, opacity: children ? 1 : 0.3 }}
              src={MinusImage}
              alt="minus"
            />
          )}
        </SC.Container>

        <SC.ItemContent
          style={{
            opacity,
            height: isOpen && previous === isOpen ? "auto" : height,
          }}
        >
          <a.div style={{ transform }} {...bind} children={children} />
        </SC.ItemContent>
      </SC.ItemFrame>
    )
  }
)

export default QandAItem
