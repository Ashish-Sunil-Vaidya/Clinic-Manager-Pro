import {
  Heading,
  Text,
  Image,
  Flex,
  Box
} from "@chakra-ui/react";


import img from "../assets/landing-page-logo.png";

const LandingPage = () => {
  return (



    <Box p={5}><Image src={img} alt="doctor" w="300px" mx="auto" mb={50} />
      <Flex direction="column" justify="center" align="center" px="5%">
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, cyan.400, cyan.600)"
          backgroundClip="text"
        >
          Dedicated Care for Your Little Ones
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Personalized and compassionate care for every child's health needs
        </Text>
        <Text color={"gray.500"} mb={6} textAlign="center">
          With over 30+ years of experience,Clinic Manager Pro provides expert medical attention with a gentle
          touch, ensuring your child's well-being and comfort.
        </Text>
      </Flex></Box>


  );
};

export default LandingPage;
