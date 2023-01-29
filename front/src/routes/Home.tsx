import { Box, Grid, Image, VStack, Text, HStack, Button } from "@chakra-ui/react";
import { FaStar, FaRegHeart } from "react-icons/fa";

export default function Home() {
    return (
        <Grid
            mt={10}
            px={40}
            columnGap={4}
            rowGap={8}
            gap={10}
            templateColumns={{
                sm: "1fr",
                md: "1fr 1fr",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
                "2xl": "repaeat(5, 1fr",
            }}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((index) => (
                <VStack alignItems={"flex-start"} key={index}>
                    <Box overflow={"hidden"} mb={3} rounded="3xl" position="relative">
                        <Image h="280" src="https://a0.muscache.com/im/pictures/miso/Hosting-47181423/original/39c9d4e7-78d0-4807-9f0d-3029d987d02a.jpeg?im_w=720" />

                        <Button variant={"unstyled"} position="absolute" top={0} right={0} color="white">
                            <FaRegHeart size="20px" />
                        </Button>
                    </Box>

                    <Box>
                        <Grid gap={2} templateColumns={"6fr 1fr"}>
                            <Text display={"block"} as="b" noOfLines={1} fontSize="md">
                                Cheomdangwahak-ro,Jeongeup-si, North Jeolla Province, South Korea
                            </Text>
                            <HStack spacing={1}>
                                <FaStar size={15} />
                                <Text>5.0</Text>
                            </HStack>
                        </Grid>
                        <Text fontSize={"sm"} color="gray.600">
                            Seoul, S. Korea
                        </Text>
                    </Box>
                    <Text fontSize={"sm"} color="gray.600">
                        <Text as="b">$72</Text> / night
                    </Text>
                </VStack>
            ))}
        </Grid>
    );
}
