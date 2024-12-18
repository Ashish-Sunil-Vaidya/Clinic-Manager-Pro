import { Box, Button, Flex, Heading,VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


const Layout = ({ children }) => {
    const navigate = useNavigate();
    return (
        <VStack minH="100svh">
            <Flex
                w="full"
                justifyContent="space-between"
                alignItems="center"
                px={10}
                py={5}
            >
                <Heading
                    as="h1"
                    size="xl"
                    bgGradient="linear(to-r, cyan.400, cyan.600)"
                    backgroundClip="text"
                >
                    Clinic Manager Pro
                </Heading>

                <Button colorScheme="cyan" variant="outline" size="md" onClick={
                    () => navigate("/login")
                }>
                    Login
                </Button>

            </Flex>
            <Box flex={1} >{children}</Box>
        </VStack>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;