import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";

function Contact() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const MESSAGING_URL = "http://msg.janmatzek.com/contact-form";

  const [buttonLoading, setButtonLoading] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmailValue(event.target.value);

  const [messageValue, setMessageValue] = useState("");
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessageValue(event.target.value);

  const [pingMeCaption, setPingMeCaption] = useState("Ping me!");

  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (messageSent) {
      setButtonDisabled(true);
    }
  }, [messageSent]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (messageSent == true) {
      setButtonDisabled(true);
    } else if (emailRegex.test(emailValue) && messageValue !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [emailValue, messageValue, messageSent]);

  const handlePingClick = () => {
    setButtonDisabled(true);
    setButtonLoading(true);
    (async () => {
      try {
        const response = await fetch(MESSAGING_URL, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailValue,
            message: messageValue,
          }),
        });
        if (response.ok) {
          setButtonLoading(false);
          setButtonDisabled(true);
          setPingMeCaption("Sent!");
          setMessageSent(true);
          setEmailValue("");
          setMessageValue("Thank you for your message!");
          setTimeout(() => {
            setMessageValue("");
            setButtonDisabled(false);
            setMessageSent(false);
            setPingMeCaption("Ping me!");
          }, 5000);
        } else {
          setButtonLoading(false);
          setButtonDisabled(false);
          setPingMeCaption("Try again :(");
          console.log("Error response:", await response.text());
        }
      } catch (error) {
        console.log("Error sending message:", error);
        setButtonLoading(false);
        setButtonDisabled(false);
        setPingMeCaption("Try again :(");
      }
    })();
  };
  return (
    <>
      <Box paddingTop={["15vh", "20vh"]} marginLeft="8vw" marginRight="8vw">
        <Heading marginBottom={"4vh"} paddingTop={["10vh", "0vh"]}>
          Get in touch!
        </Heading>
        <Flex width="100%" direction={["column", "row"]}>
          <Flex width={["100%", "50%"]} marginBottom={["4vh", 0]}>
            <Text fontSize={["14px", "16px"]} textAlign={["center", "right"]}>
              Ping me here or hit me up on LinkedIn!
            </Text>
          </Flex>
          <Flex
            direction="column"
            alignItems={["center", "flex-end"]}
            width={["100%", "50%"]}
            height={"100%"}
          >
            <Input
              type="email"
              value={emailValue}
              placeholder="Your email"
              _placeholder={{ color: "darkGray" }}
              maxWidth="80%"
              marginBottom={"2vh"}
              onChange={handleEmailChange}
            />
            <Textarea
              value={messageValue}
              placeholder="Your message"
              _placeholder={{ color: "darkGray" }}
              maxWidth="80%"
              marginBottom={"2vh"}
              onChange={handleMessageChange}
            />
            <Button
              width="125px"
              onClick={() => handlePingClick()}
              isDisabled={buttonDisabled}
              isLoading={buttonLoading}
            >
              {pingMeCaption}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Contact;
