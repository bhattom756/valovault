import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Dialog,
  XStack,
  Text,
  Separator,
  Checkbox,
} from "tamagui";
import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { ScrollView, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Modal = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const checkTermsAccepted = async () => {
      try {
        const accepted = await AsyncStorage.getItem("termsAccepted");
        if (accepted === "true") {
          setTermsAccepted(true);
        }
      } catch (e) {
        console.error(e);
      }
    };

    checkTermsAccepted();
  }, []);

  const acceptTerms = async () => {
    try {
      await AsyncStorage.setItem("termsAccepted", "true");
      setTermsAccepted(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Dialog modal>
        <Dialog.Trigger asChild>
          <Text className="top-16 font-bold text-[15px] active:text-black">
            Terms of Service
          </Text>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay
            key="overlay"
            animation="slow"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <Dialog.Content
            className="h-[800px] w-[400px]"
            bordered
            elevate
            key="content"
            animateOnly={["transform", "opacity"]}
            animation={[
              "quicker",
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            gap="$4"
          >
            <ScrollView className="flex-1 px-1 ">
              <Text className="text-2xl font-extrabold">Terms of Service</Text>
              <Separator
                style={{ borderBottomWidth: 1.5, borderColor: "grey" }}
                marginVertical={15}
              />
              <Text className="font-normal text-[15px] mt-1">
                1. Acceptance of Terms: By signing in or using our services, you
                agree to these terms and conditions. If you do not agree, you
                must not access or use our platform.
              </Text>
              <Text className="font-normal text-[15px] mt-4">
                2. User Accounts: Account Creation: To access certain features,
                you must create an account using valid credentials. You are
                responsible for maintaining the confidentiality of your account
                and password. Security: You must notify us immediately of any
                unauthorized access to your account or any other security
                breaches. We are not liable for any loss or damage arising from
                your failure to comply with this security obligation. Account
                Information: You agree to provide accurate and complete
                information when creating an account. We reserve the right to
                suspend or terminate accounts that provide false information.
              </Text>
              <Text className="font-normal text-[15px] mt-4">
                3. Data Security: Data Collection: We collect and use personal
                information in accordance with our Privacy Policy. By using our
                services, you consent to the collection and use of your data.
                Data Protection: We employ industry-standard security measures
                to protect your data. However, we cannot guarantee absolute
                security and are not responsible for unauthorized access or data
                breaches. Account Authentication: We may implement additional
                security measures, such as two-factor authentication, to protect
                your account. You agree to comply with these measures to ensure
                the security of your account.
              </Text>
              <Text className="font-normal text-[15px] mt-4">
                4. Acceptable Use: Prohibited Activities: You agree not to
                engage in any activity that violates our terms or any applicable
                laws. This includes, but is not limited to, hacking, spamming,
                or using our services for any unlawful purpose. Content
                Ownership: All content provided by the service is the property
                of our platform or its licensors. You are not permitted to use
                this content outside of the intended use of our services.
              </Text>
              <Text className="font-normal text-[15px] mt-4">
                5. Limitation of Liability: Service Availability: We strive to
                provide uninterrupted service, but we do not guarantee that the
                service will always be available. We are not liable for any
                downtime or service interruptions. Indemnification: You agree to
                indemnify and hold us harmless from any claims, losses, or
                damages arising from your use of the service or violation of
                these terms.
              </Text>
              <Text className="font-normal text-[15px] mt-4">
                6. Modifications to Terms: We reserve the right to modify these
                terms at any time. Your continued use of the service after
                changes have been made constitutes your acceptance of the new
                terms.
              </Text>
              <Text className="font-normal text-[15px] mt-4">
                7. Termination: We reserve the right to suspend or terminate
                your account if you violate these terms. Upon termination, your
                right to access the service will immediately cease.
              </Text>
              <Text className="font-normal text-[15px] mt-4">
                8. Governing Law: These terms are governed by the laws of [Your
                Country/State]. Any disputes arising from these terms will be
                resolved in the courts of [Your Jurisdiction].
              </Text>
              <Text className="font-normal text-[15px] mt-4">
                9. Contact Information: If you have any questions or concerns
                about these terms, please contact us at zyx12@gmail.com.
              </Text>
            </ScrollView>
            <Separator style={{ borderBottomWidth: 1, borderColor: "grey" }} />
            <XStack alignSelf="flex-end" gap="$4">
              <Dialog.Close displayWhenAdapted asChild>
                {termsAccepted ? (
                  <Button theme="active" aria-label="Close">
                    <Checkbox size="$4" defaultChecked>
                      <Checkbox.Indicator>
                        <CheckIcon />
                      </Checkbox.Indicator>
                    </Checkbox>
                    Terms Accepted
                  </Button>
                ) : (
                  <Button
                    theme="active"
                    aria-label="Close"
                    onPress={acceptTerms}
                  >
                    Accept terms
                  </Button>
                )}
              </Dialog.Close>
            </XStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  );
};

export default Modal;
