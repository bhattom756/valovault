import React from "react";
import { View, Button, Dialog, XStack, Text } from "tamagui";
import { ScrollView } from "react-native";

const Modal = () => {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Dialog modal>
        <Dialog.Trigger asChild>
          <Button>Show Dialog</Button>
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
              <ScrollView className="flex-1">
                <Text>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quibusdam excepturi quos dolore consectetur repellat quisquam voluptas amet, saepe deserunt aliquid tempore assumenda corporis officiis obcaecati quae. Molestias reprehenderit nam eum ad expedita perferendis quam odio quasi at omnis totam, esse placeat ratione facilis dignissimos consectetur natus repellat distinctio veritatis! Impedit, molestiae commodi inventore sint incidunt soluta placeat excepturi odit distinctio. Quaerat aspernatur, optio impedit ad blanditiis iure alias placeat accusamus. Ullam numquam delectus impedit qui facilis recusandae, dolores ratione voluptatibus repudiandae fugiat provident doloremque vel, non nulla officiis eligendi velit alias eveniet molestias neque facere natus similique mollitia ipsa. Earum iste itaque enim natus asperiores quia similique laboriosam voluptate, dolores voluptas magnam sapiente vitae ducimus eaque inventore culpa porro eligendi labore iure unde consequatur deleniti vero, recusandae facilis. Nemo reiciendis commodi nostrum accusamus porro autem similique provident omnis quam ipsam iste numquam beatae esse quos corporis, accusantium temporibus libero soluta optio deserunt quo, molestias obcaecati rerum? Quo, illum soluta? Omnis non ad iste fugiat quia esse, tempora deserunt nostrum officia asperiores eveniet aliquam architecto consequatur voluptates dolorem illum aperiam animi! Soluta cupiditate aliquam quo recusandae explicabo, perferendis cumque, rerum suscipit repellat natus temporibus. Commodi quis dolor eos fugiat minima sunt sequi veniam reprehenderit porro eius amet suscipit tenetur, assumenda corporis, maxime debitis necessitatibus saepe nisi pariatur consequatur laboriosam deserunt inventore sint nesciunt? Recusandae repellat nemo quos deleniti asperiores cum nam harum eaque, ratione voluptatibus consequuntur debitis impedit repellendus nisi soluta! Cum accusantium ad ullam eum numquam minima quas minus aspernatur praesentium error, quam at ratione, magnam laboriosam? Error reprehenderit autem aut atque doloremque tenetur nulla culpa nemo quam, voluptas doloribus obcaecati expedita, sint odit nobis numquam repellendus vitae ex laborum totam, iste aspernatur quas corporis corrupti! Vel, omnis laudantium atque eius nulla velit harum totam eligendi culpa molestias esse similique magni incidunt tempore dolor ex! Incidunt nobis provident illo dolores, dolor quae veniam distinctio repudiandae, est ratione ut aliquid. Ea facere accusantium itaque repellat voluptatibus fugit sapiente, autem in dolores laudantium repudiandae voluptatum recusandae, ex blanditiis a velit nobis temporibus cum tempore, nisi odio officiis sunt. Doloribus aperiam explicabo similique eos consequuntur dolores laboriosam quibusdam voluptates possimus cumque quo vero molestias deserunt amet vel reprehenderit quidem sequi dolorem incidunt enim, minus et laborum ratione atque. Quia perferendis consequuntur beatae delectus nihil ad natus cumque dolores optio itaque amet, eveniet explicabo asperiores laudantium commodi. Earum expedita mollitia dignissimos ullam. Harum corporis repudiandae esse quasi libero quibusdam, voluptatum aliquid eius mollitia in, vitae nam. Facere harum illo et ea nisi qui nesciunt, distinctio modi in, perferendis, iusto aspernatur reprehenderit quasi voluptate placeat sequi exercitationem odit beatae perspiciatis eius? Nihil dolorum et debitis unde omnis, blanditiis quidem tempore ad libero iusto dolores esse harum quis voluptatum, commodi optio corporis consequatur aspernatur aliquid ducimus impedit iure qui! Nihil quibusdam accusantium mollitia nulla repudiandae, maxime quidem commodi pariatur magnam tempora praesentium obcaecati magni doloremque, dolorem quae doloribus unde eius quaerat, ipsa cumque minus laboriosam quasi culpa. Sit voluptates, voluptas ut iusto tempora at magni.
                </Text>
              </ScrollView>
            <XStack alignSelf="flex-end" gap="$4">
              <Dialog.Close asChild>
                <Button theme="active">Save changes</Button>
              </Dialog.Close>
            </XStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  );
};

export default Modal;
