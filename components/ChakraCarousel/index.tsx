import React, {
  useCallback,
  useEffect,
  useState,
  useMemo
} from "react"

import {
  useMediaQuery,
  useTheme
} from "@chakra-ui/react"

import Item from './Item'
import Track from './Track'
import Slider from './Slider'

export default function ChakraCarousel({ children, gap, min, middle, max, indicator }: any) {
  const [trackIsActive, setTrackIsActive] = useState(false)
  const [multiplier, setMultiplier] = useState(0.35)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [activeItem, setActiveItem] = useState(0)
  const [constraint, setConstraint] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)

  const initSliderWidth = useCallback((width: any) => setSliderWidth(width), [])

  const positions = useMemo(
      () => children.map((_: any, index: any) => -Math.abs((itemWidth + gap) * index)),
      [children, itemWidth, gap]
  )

  const { breakpoints } = useTheme()

  const [isBetweenBaseAndMd] = useMediaQuery(
      `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`
  )

  const [isBetweenMdAndXl] = useMediaQuery(
      `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`
  )

  const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`)

  useEffect(() => {
    if (isBetweenBaseAndMd) {
      setItemWidth(sliderWidth / min - gap)
      setMultiplier(0.15)
      setConstraint(min)
    }
    if (isBetweenMdAndXl) {
      setItemWidth(sliderWidth / middle - gap)
      setMultiplier(0.35)
      setConstraint(middle)
    }
    if (isGreaterThanXL) {
      setItemWidth(sliderWidth / max - gap)
      setMultiplier(0.35)
      setConstraint(max)
    }
  }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap])

  const sliderProps = {
    setTrackIsActive,
    initSliderWidth,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap,
    indicator
  }

  const trackProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    sliderWidth,
    activeItem,
    constraint,
    multiplier,
    itemWidth,
    positions,
    gap
  }

  const itemProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap
  }

  return (
      <Slider {...sliderProps}>
        <Track {...trackProps}>
          {children.map((child: any, index: any) => {
            return (
                <Item {...itemProps} index={index} key={index}>
                  {child}
                </Item>
            )
          })}
        </Track>
      </Slider>
  )
}




