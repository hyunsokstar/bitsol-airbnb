import React, { ReactElement } from 'react'
import { Box } from "@chakra-ui/react"


interface Props {

}

function BuildingManagement({ }: Props): ReactElement {
    return (
        <div>
            <Box ml="80" mr="80" border='1px' borderColor='gray.200'>
                <Box>
                    One Stop Total Service (종합서비스)
                </Box>
                <Box>
                    기존 관리방식을 탈피하여 One Stop Service로 고객의 Needs와 고유목적을 달성할 수 있도록 건물관리에 있어
                    최적의 상태를 유지하며, 경제성, 효율성, 기능성을 보장하고
                    건물관리와 부동산에 대한 종합적인 서비스를 제공드리고 있습니다.
                </Box>
            </Box>
        </div>
    )
}

export default BuildingManagement
