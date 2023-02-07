import useHostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";

import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from "@chakra-ui/react";

export default function UploadRoom() {

    console.log("uploadRoom page check !");
    

    return (
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
    );
}
