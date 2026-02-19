import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Element } from "react-scroll";

// TODO: Projects should be elements creatable form an array of objects
function Projects() {
  const SPOTIFY_URL = "https://spotify-dashboard.janmatzek.com/"
  const WEATHER_BOT_URL = "https://weatherbot.janmatzek.com/"
  return (
    <>
      <Element name="projects-section"></Element>
      <Box
        paddingTop={["8vh", "20vh"]}
        marginLeft={["4vw", "8vw"]}
        marginRight={["4vw", "8vw"]}
      >
        <Heading marginBottom={"4vh"} paddingTop={["10vh", "0vh"]}>
          Projects
        </Heading>
        <Tabs isFitted variant="unstyled">
          {" "}
          <TabList mb="1em" borderBottom="2px solid" borderColor="gray.200">
            <Tab>Weatherbot</Tab>
            <Tab>Spotify Dashboard</Tab>
            <Tab>Image Splitter</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text
                className="projectPerex"
                textAlign={["center"]}
                marginBottom={["2vh", "4vh"]}
                fontSize={["14px", "16px"]}
              >
                An agentic workflow to provide weather forecast.
                <Box as="span" display={["none", "inline"]}>
                  <br />
                </Box>
                Small talk about weather... with AI!
              </Text>
              <Flex
                direction={["column", "row"]}
                justifyContent={"space-evenly"}
                alignItems="center"
              >
                <Box marginBottom={["2vh", 0]}>
                  <Link
                    href={WEATHER_BOT_URL}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <Box
                      filter="none"
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                        filter: "drop-shadow(0 0 5px white)",
                      }}
                    >
                      <Image
                        src="./assets/weatherbot.png"
                        maxWidth="30vw"
                      ></Image>
                    </Box>
                  </Link>
                </Box>
                <Flex
                  width={["100%", "35vw"]}
                  direction="column"
                  justifyContent={"center"}
                  fontSize={["14px", "16px"]}
                >
                  <UnorderedList styleType="'- '">
                    <ListItem>
                      Chatbot interface to get weather forecast.
                    </ListItem>
                    <ListItem>
                      As default, location and date are parsed from user messages and used to create the forecast.
                    </ListItem>
                    <ListItem>
                      If OpenAI api key is provided, a LLM agent handles user interaction and gets weather info by using tools.
                    </ListItem>
                    <ListItem>
                      Written in TypeScript (React + Node.js)
                    </ListItem>
                    <ListItem>
                      Code:{" "}
                      <Link
                        href="https://github.com/janmatzek/weather-bot/"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        janmatzek/weather-bot
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Text
                className="projectPerex"
                textAlign={["center"]}
                marginBottom={["2vh", "4vh"]}
                fontSize={["14px", "16px"]}
              >
                A web application showing my{" "}
                <Link
                  href={SPOTIFY_URL}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Spotify listening stats
                </Link>
                .{" "}
                <Box as="span" display={["none", "inline"]}>
                  <br />
                </Box>
                Kind of like Wrapped, but I don’t have to wait until December!
              </Text>
              <Flex
                direction={["column", "row"]}
                justifyContent={"space-evenly"}
                alignItems="center"
              >
                <Box marginBottom={["2vh", 0]}>
                  <Link
                    href={SPOTIFY_URL}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <Box
                      filter="none"
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                        filter: "drop-shadow(0 0 5px white)",
                      }}
                    >
                      <Image
                        src="./assets/spotifyDashboard.png"
                        maxWidth="30vw"
                      ></Image>
                    </Box>
                  </Link>
                </Box>
                <Flex
                  width={["100%", "35vw"]}
                  direction="column"
                  justifyContent={"center"}
                  fontSize={["14px", "16px"]}
                >
                  <UnorderedList styleType="'- '">
                    <ListItem>
                      Containerized app fetching data from
                      Spotify API every hour
                    </ListItem>
                    <ListItem>
                      Frontend created in React using Chakra UI and Chart.js,
                      backend runs on Python FastAPI
                    </ListItem>
                    <ListItem>
                      Code:{" "}
                      <Link
                        href="https://github.com/janmatzek/spotify-dashboard"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        janmatzek/spotify-dashboard
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Text
                className="projectPerex"
                textAlign={["center"]}
                marginBottom={["2vh", "4vh"]}
                fontSize={["14px", "16px"]}
              >
                A web app to help me automate image edits before posting on
                Instagram.
              </Text>
              <Flex
                direction={["column", "row"]}
                justifyContent={"space-evenly"}
                alignItems="center"
              >
                <Box marginBottom={["2vh", 0]}>
                  <Link
                    href="https://image-splitter.janmatzek.com"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <Box
                      filter="none"
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                        filter: "drop-shadow(0 0 5px white)",
                      }}
                    >
                      <Image
                        src="./assets/instagram.png"
                        maxWidth="30vw"
                      ></Image>
                    </Box>
                  </Link>
                </Box>
                <Flex
                  width={["100%", "35vw"]}
                  direction="column"
                  justifyContent={"center"}
                  fontSize={["14px", "16px"]}
                >
                  <UnorderedList styleType="'- '">
                    <ListItem>
                      Splits an image into a grid based on user input and saves
                      the outputs. Has option to apply white top and bottom
                      borders
                    </ListItem>
                    <ListItem>
                      Functionality wrapped around Pillow library automate
                      common image edits.
                    </ListItem>
                    <ListItem>
                      <Link
                        href="https://github.com/janmatzek/image-splitter-web-app"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Frontend
                      </Link>{" "}
                      created in React using Chakra UI,{" "}
                      <Link
                        href="https://github.com/janmatzek/instagram-image-splitter"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        backend
                      </Link>{" "}
                      runs on Python FastAPI
                    </ListItem>
                    <ListItem>
                      Also available as a CLI, can be installed via pip
                    </ListItem>
                    <ListItem>
                      <Link
                        href="https://image-splitter.janmatzek.com"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Web App
                      </Link>{" "}
                      |{" "}
                      <Link
                        href="https://github.com/janmatzek/instagram-image-splitter"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>{" "}
                      |{" "}
                      <Link
                        href="https://pypi.org/project/insta-splitter/"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        PyPI
                      </Link>{" "}
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default Projects;
