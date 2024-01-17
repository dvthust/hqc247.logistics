import { Link } from '@chakra-ui/next-js'

export default function NextLink({href, children, ...rest}: any) {

  return <Link href={href || '#'} {...rest} _hover={{textDecoration:'none'}}>{children}</Link>
}