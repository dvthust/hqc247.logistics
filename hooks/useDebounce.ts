import debounce from 'lodash/debounce'
import { useRef } from 'react'

function useDebounce(func: any, wait: any, options: any) {
	return useRef(debounce(func, wait, options)).current
}

export default useDebounce
