import {Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100"
      maxWidth={1480}
      h="20"
      mt="4"
      mx={["auto", "210"]}
      px="6"
      align="center"
      justify="space-between"
    >  
    
    {!isWideVersion && (
      <IconButton
      aria-label="Open navigation menu"
        icon={<Icon as={RiMenuLine} />}
        fontSize="24"
        variant="unstyled"
        onClick={onOpen}
        mr="2"
      />
    )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}