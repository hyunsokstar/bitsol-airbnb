import useHostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";

// import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, SimpleGrid, Grid, GridItem, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

export default function UploadRoom() {
    console.log("uploadRoom page check !");

    return (
        <Stack ml={150} mr={150} mt={50}>
            <HStack>
                <Box w={"20%"} textAlign="center">
                    제품 선택 *
                </Box>
                <Box w={"60%"} textAlign="center">
                    <CheckboxGroup colorScheme="red" defaultValue={[]}>
                        <Stack spacing={[20, 10]} direction={["column", "row"]}>
                            <Checkbox value="Server">Server</Checkbox>
                            <Checkbox value="Storage">Storage</Checkbox>
                            <Checkbox value="DPS">DPS</Checkbox>
                            <Checkbox value="Client Solution">Client Solution</Checkbox>
                            <Checkbox value="Network">Network</Checkbox>
                            <Checkbox value="etc">etc</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Box>
            </HStack>
            <HStack>
                <Box w={"20%"} textAlign="center">
                    회사명(단체명) *
                </Box>
                <Box w={"60%"} textAlign="center">
                    <FormControl>
                        <Input type="text" />
                    </FormControl>
                </Box>
            </HStack>

        </Stack>
    );
}
