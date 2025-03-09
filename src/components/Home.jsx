"use client"
import "../styles/Home.css"
import { Button, Heading, Box, Text, Flex, Container } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

const Home = () => {
  return (
    <Box id="home" position="relative" overflow="hidden" minHeight="100vh">
      {/* Background gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
        zIndex="1"
      />

      {/* Image gallery with modern layout */}
      <Flex className="image-gallery" position="absolute" top="0" left="0" right="0" bottom="0" zIndex="0">
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          flex="1"
          height="100%"
          overflow="hidden"
        >
          <Box
            as="img"
            src="https://www.sciencesetavenir.fr/assets/img/2021/12/23/cover-r4x3w1200-61c45f4b25fea-049-f0342710.jpg"
            alt="Scenic mountain landscape"
            width="100%"
            height="100%"
            objectFit="cover"
            filter="brightness(0.9)"
          />
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          flex="1"
          height="100%"
          overflow="hidden"
          display={{ base: "none", md: "block" }}
        >
          <Box
            as="img"
            src="https://www.angsana.com/_next/image?url=https%3A%2F%2Fwww.angsana.com%2Fassets%2F2021-11%2Fdeluxe-in-ocean-villa-4.jpg&w=2048&q=75"
            alt="Luxury ocean villa"
            width="100%"
            height="100%"
            objectFit="cover"
            filter="brightness(0.9)"
          />
        </MotionBox>
      </Flex>

      {/* Content section with modern styling */}
      <Container
        maxW="container.xl"
        height="100vh"
        position="relative"
        zIndex="2"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={{ base: 6, md: 10 }}
      >
        <Flex direction="column" maxW={{ base: "100%", md: "60%" }} color="white">
          <MotionHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            as="h1"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            letterSpacing="tight"
            lineHeight="1.2"
            mb={6}
          >
            Explore the Beauty of Journey
          </MotionHeading>

          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            fontSize={{ base: "lg", md: "xl" }}
            mb={8}
            lineHeight="tall"
          >
            Join our community of travel enthusiasts and discover new places, meet new people, and make lasting
            memories. Book with us and experience the world like never before.
          </MotionText>

          <MotionButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            as="a"
            href="#about"
            size="lg"
            colorScheme="teal"
            fontWeight="bold"
            px={8}
            py={6}
            borderRadius="full"
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            _active={{ transform: "translateY(0)" }}
            width={{ base: "100%", sm: "auto" }}
          >
            Discover More
          </MotionButton>
        </Flex>
      </Container>
    </Box>
  )
}

export default Home

