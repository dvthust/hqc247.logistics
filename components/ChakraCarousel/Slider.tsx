import {useBoundingRect} from '@/hooks'
import React, {useEffect} from 'react'
import {Box, Button, Flex, HStack, Progress} from '@chakra-ui/react'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {percentage} from "@/utils/helpers";

export default function Slider({
                                 setTrackIsActive,
                                 initSliderWidth,
                                 setActiveItem,
                                 activeItem,
                                 constraint,
                                 itemWidth,
                                 positions,
                                 children,
                                 gap,
                                 indicator
                               }: any) {
  // @ts-ignore
    const [ref, {width}] = useBoundingRect()

  useEffect(() => initSliderWidth(Math.round(width)), [
    width,
    initSliderWidth,
  ])

  const handleFocus = () => {
    setTrackIsActive(true)
  }

  const handleDecrementClick = () => {
    setTrackIsActive(true)
    !(activeItem === positions.length - positions.length) &&
    setActiveItem((prev: any) => prev - 1)
  }

  const handleIncrementClick = () => {
    setTrackIsActive(true)
    !(activeItem === positions.length - constraint) &&
    setActiveItem((prev: any) => prev + 1)
  }

    return (
      <>
        <Box
            // @ts-ignore
            ref={ref}
            w={{base: '100%'}}
            mx={{base: 0}}
            px={`${gap / 2}px`}
            position="relative"
            overflow="hidden"
            _before={{
              bgGradient: 'linear(to-r, base.d400, transparent)',
              position: 'absolute',
              w: `${gap / 2}px`,
              content: '\'\'',
              zIndex: 1,
              h: '100%',
              left: 0,
              top: 0,
            }}
            _after={{
              bgGradient: 'linear(to-l, base.d400, transparent)',
              position: 'absolute',
              w: `${gap / 2}px`,
              content: '\'\'',
              zIndex: 1,
              h: '100%',
              right: 0,
              top: 0,
            }}
        >
          {children}
        </Box>

        {indicator === 'progress' && <Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto">
          <Button
              onClick={handleDecrementClick}
              onFocus={handleFocus}
              mr={`${gap / 3}px`}
              color="gray.200"
              variant="link"
              minW={0}
          >
            <ChevronLeftIcon boxSize={9}/>
          </Button>

          <Progress
              value={percentage(activeItem, positions.length - constraint)}
              alignSelf="center"
              borderRadius="2px"
              bg="base.d100"
              flex={1}
              h="3px"
              sx={{
                '> div': {
                  backgroundColor: 'gray.400',
                },
              }}
          />

          <Button
              onClick={handleIncrementClick}
              onFocus={handleFocus}
              ml={`${gap / 3}px`}
              color="gray.200"
              variant="link"
              zIndex={2}
              minW={0}
          >
            <ChevronRightIcon boxSize={9}/>
          </Button>
        </Flex>}

        {indicator === 'dot' && <HStack justify="center" w="full" pt={4} pb={2}>
          {[...Array(Math.floor(positions.length / (constraint ? constraint : 1)))].map((_, slideIndicator) => (
              <Box
                  key={`dots-${slideIndicator}`}
                  cursor="pointer"
                  boxSize={["7px", "7px", "12px"]}
                  m="0 2px"
                  bg={Math.floor(activeItem / constraint) === slideIndicator ? "blackAlpha.700" : "blackAlpha.500"}
                  rounded="50%"
                  display="inline-block"
                  transition="background-color 0.6s ease"
                  _hover={{ bg: "blackAlpha.700" }}
                  onClick={() => {
                    setActiveItem(slideIndicator * constraint)
                  }}
              />
          ))}
        </HStack>}
      </>
  )
}

