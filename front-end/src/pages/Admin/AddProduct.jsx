import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlywoodProducts } from "../../redux/Admin/admin.action";
import AdminPlywoodPanel from "./AdminPlywoodPanel";

const AddProduct = () => {



  return (
    <Box
      width={{ base: "100%", md: "70%", lg: "80%" }}
      border="1px solid black"
      m="auto"
      mr={0}
    >
      <Flex flexDir={"column"}>
        <Box width={"full"}  border="1px solid red">
          <Tabs size="md" variant="enclosed" colorScheme={"messenger"}>
            <TabList>
              <Tab>Plywoods</Tab>
              <Tab>Medicines</Tab>
              <Tab>Machines</Tab>
              <Tab>Bulbs</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
               
                <Box borderTop={"1px solid black"}>
                  <AdminPlywoodPanel />
                </Box>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>Three!</p>
              </TabPanel>
              <TabPanel>
                <p>four!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddProduct;
