import {chakra} from '@chakra-ui/react'
import SupportInfo from '@/components/Sidebar/SupportInfo'

export default function Sidebar(props: any) {

  return <chakra.div className="sidebar-container" mx={'auto'}>
    <SupportInfo />
  </chakra.div>
}