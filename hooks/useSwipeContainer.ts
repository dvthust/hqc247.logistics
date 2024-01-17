import { useEffect } from 'react'

export default function useSwipeContainer(container: any) {
  useEffect(() => {
    const $thumbContainer = document.querySelector(container) || null
    if (!$thumbContainer) return

    let isDragged = false
    let mouseDown = false
    let startX: any, scrollLeft: any

    const onMouseDown = function (e: any) {
      e.preventDefault()
      mouseDown = true
      isDragged = false
      startX = e.pageX - $thumbContainer.offsetLeft
      scrollLeft = $thumbContainer.scrollLeft
    }

    const stopDragging = function (e: any) {
      e.preventDefault()
      mouseDown = false
    }

    const onWheelThumbContainer = (e: any) => {
      e.preventDefault()
      $thumbContainer.scrollLeft += e.deltaY
    }

    const onMouseMove = (e: any) => {
      e.preventDefault()
      isDragged = true
      if(!mouseDown) { return }
      const x = e.pageX - $thumbContainer.offsetLeft
      const scroll = x - startX
      $thumbContainer.scrollLeft = scrollLeft - scroll
    }

    const preventClickOnDrag = (event: any) => {
      if (isDragged) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    $thumbContainer.addEventListener('mousemove', onMouseMove)
    $thumbContainer.addEventListener('mousedown', onMouseDown, false)
    $thumbContainer.addEventListener('mouseup', stopDragging, false)
    $thumbContainer.addEventListener('mouseleave', stopDragging, false)
    $thumbContainer.addEventListener('wheel', onWheelThumbContainer)
    $thumbContainer.addEventListener ('click', preventClickOnDrag, true )

    return () => {
      $thumbContainer.removeEventListener('mousemove', onMouseMove)
      $thumbContainer.removeEventListener('wheel', onWheelThumbContainer)
      $thumbContainer.removeEventListener('mousedown', onMouseDown)
      $thumbContainer.removeEventListener('mouseup', stopDragging)
      $thumbContainer.removeEventListener('mouseleave', stopDragging)
      $thumbContainer.removeEventListener('click', preventClickOnDrag)
    }
  }, [])
}