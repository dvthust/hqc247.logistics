import React, {useState} from 'react'
import {Flex} from '@chakra-ui/react'

export default function Item({
                               setTrackIsActive,
                               setActiveItem,
                               activeItem,
                               constraint,
                               itemWidth,
                               positions,
                               children,
                               index,
                               gap,
                             }: any) {
  const [userDidTab, setUserDidTab] = useState(false)

  const handleFocus = () => {
    setTrackIsActive(true)
  }

  const handleBlur = () => {
    userDidTab && index + 1 === positions.length && setTrackIsActive(false)
    setUserDidTab(false)
  }

  const handleKeyUp = (event: any) => {
    event.key === 'Tab' &&
    !(activeItem === positions.length - constraint) &&
    setActiveItem(index)
  }

  const handleKeyDown = (event: any) => {
    event.key === 'Tab' && setUserDidTab(true)
  }

  return (
      <Flex
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          w={`${itemWidth}px`}
          _notLast={{
            mr: `${gap}px`,
          }}
          py="4px"
          justifyContent={'center'}
      >
        {children}
      </Flex>
  )
}