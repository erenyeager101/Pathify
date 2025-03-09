"use client"

import { useEffect, useState } from "react"
import "../styles/Navbar.css"
import {
  Box,
  Heading,
  Flex,
  Stack,
  IconButton,
  Container,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)

const NavLink = ({ children, href }) => (
  <Box
    as="a"
    href={href}
    px={4}
    py={2}
    fontWeight="medium"
    color="white"
    position="relative"
    _hover={{
      textDecoration: "none",
      _after: {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
      },
    }}
    _after={{
      content: '""',
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "white",
      transformOrigin: "bottom right",
      transition: "transform 0.3s ease-out",
    }}
  >
    {children}
  </Box>
)

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      transition="all 0.3s ease"
      bg={scrolled ? "rgba(0, 128, 128, 0.9)" : "transparent"}
      boxShadow={scrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none"}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Container maxW="container.xl">
        <Flex h="80px" alignItems="center" justifyContent="space-between">
          <MotionHeading
            as="a"
            href="/#home"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="white"
            letterSpacing="tight"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Pathify
          </MotionHeading>

          {/* Desktop Navigation */}
          <Stack direction="row" spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
            <NavLink href="/#home">Home</NavLink>
            <NavLink href="/#about">About Us</NavLink>
            <NavLink href="/#hotels">Hotels</NavLink>
            <NavLink href="/#flights">Flights</NavLink>
            <NavLink href="/#holidays">Holidays</NavLink>
            <NavLink href="/#contact">Contact Us</NavLink>
          </Stack>

          {/* Mobile Navigation Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="ghost"
            color="white"
            aria-label="Open Menu"
            icon={<GiHamburgerMenu size={24} />}
            _hover={{ bg: "transparent" }}
          />
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="teal.700">
          <DrawerCloseButton color="white" size="lg" />
          <DrawerHeader borderBottomWidth="1px" color="white">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={6} mt={6} align="start">
              <Box as="a" href="/#home" fontSize="lg" color="white" fontWeight="medium" onClick={onClose}>
                Home
              </Box>
              <Box as="a" href="/#about" fontSize="lg" color="white" fontWeight="medium" onClick={onClose}>
                About Us
              </Box>
              <Box as="a" href="/#hotels" fontSize="lg" color="white" fontWeight="medium" onClick={onClose}>
                Hotels
              </Box>
              <Box as="a" href="/#flights" fontSize="lg" color="white" fontWeight="medium" onClick={onClose}>
                Flights
              </Box>
              <Box as="a" href="/#holidays" fontSize="lg" color="white" fontWeight="medium" onClick={onClose}>
                Holidays
              </Box>
              <Box as="a" href="/#contact" fontSize="lg" color="white" fontWeight="medium" onClick={onClose}>
                Contact Us
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  )
}

export default Navbar

