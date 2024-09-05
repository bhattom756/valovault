import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Card,
  XStack,
  Separator,
  Input,
  TextArea,
  YStack,
  Form,
  Button,
  Spinner,
  Checkbox
} from "tamagui";
import { LogIn, Check as CheckIcon } from "@tamagui/lucide-icons";
import { router } from "expo-router";

const signin = () => {
  const signbg = require("../../assets/images/signbg.jpg");
  const logo = require("../../assets/images/logo.jpeg");

  const [login, setLogin] = useState(false);
  const [loggedInText, setLoggedInText] = useState("");

  const handleLogin = () => {
    setLogin(true);
    setLoggedInText("");
    setTimeout(() => {
      setLogin(false);
      setLoggedInText(
        <Checkbox size="$4" defaultChecked>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox> 
      );
      router.push("/home")
    }, 3000);
  };

  return (
    <SafeAreaView>
      <ScrollView className="bg-white h-full w-full">
        <ImageBackground
          source={signbg}
          resizeMode="cover"
          style={{ height: 870 }}
        >
          <Image
            source={logo}
            resizeMode="cover"
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginTop: 15,
              marginLeft: 10,
            }}
          />
          <View className="flex-1 items-center top-[200px]">
            <Card elevate size="$4" className="bg-white">
              <Card.Header padded className="flex items-center">
                <Text className="font-extrabold text-3xl mt-5">
                  Sign in with
                  <Text className="text-[#ff5561]"> Riot</Text>
                </Text>
                <Form
                  className="bg-white border-0 "
                  alignItems="center"
                  gap="$2"
                  onSubmit={() => {}}
                  borderWidth={1}
                  borderRadius="$4"
                  backgroundColor="$background"
                  borderColor="$borderColor"
                >
                  <YStack width={350} overflow="hidden">
                    <Input
                      placeholder="username"
                      size="$5"
                      className="bg-white mt-7"
                    />
                    <Input
                      placeholder="password"
                      size="$5"
                      className="bg-white mt-5"
                    />
                  </YStack>
                  <Form.Trigger asChild>
                    <Button
                      className="bg-[#ff5561] text-white w-auto h-auto font-extrabold text-lg mt-6"
                      onPress={handleLogin}
                    >
                      {login ? (
                        <Spinner size="small" color="#fff" />
                      ) : (
                        loggedInText && "Logged In" || <LogIn size={26} strokeWidth={1.25} />
                      )}
                    </Button>
                  </Form.Trigger>
                </Form>
              </Card.Header>
              <Card.Footer padded>
                <XStack flex={1} />
                {/* Footer content goes here */}
              </Card.Footer>
            </Card>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
