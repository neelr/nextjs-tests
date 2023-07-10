"use client";
import { Box, Text, Flex, Button, Image, useColorMode } from "theme-ui";


function DogImage({ mode}) {
    return (
        <Box sx={{
            borderRadius: "50%",
            overflow: "hidden",
        }}>
            <Image
            sx={{
                width: "500px"
            }}
             src={mode == "swiss" ? "https://placedog.net/500/280" : "https://waggingtailspetresort.com/wp-content/uploads/2017/09/smiling-dog-1024x683.jpeg"} />
        </Box>
    );
}

function App({ title }) {
    const [colorMode, setColorMode] = useColorMode();
  return (
    <Flex sx={{
        flexDirection: "column",
        alignItems: "center",
        p: 3,
    }}>
      <Text variant="heading" as="h1" mx="auto">
        THE DOGS ARE WINNING????
      </Text>
      <Text variant="heading" as="h2" mx="auto">
        {title}
      </Text>
        <DogImage mode={colorMode}/>
        <Button variant="primary" sx={{
            ":hover": {
                bg: "secondary",
                cursor: "pointer",
            },
        }}
        onClick={() => {
            setColorMode(colorMode === "dark" ? "swiss" : "dark")
        }}>Click me</Button>
    </Flex>
  );
}

export async function getStaticProps() {
  let res = await fetch("http://localhost:3000/api/getData");
  let data = await res.json();
  console.log(data);

  return {
    props: {
      title: data.title,
    },
    revalidate: 1,
  };
}

export default App;
