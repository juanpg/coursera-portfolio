import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack bg='#fff' color='#000' borderRadius={5} paddingBottom={'1.5'}>
        <Image src={imageSrc} alt={title} borderRadius={5} />
        <Heading fontSize={'md'} textAlign={'left'} width={'100%'} px={'2'} py={'1.5'}>{title}</Heading>
        <Text px={'2'} py={'1'} fontSize={'small'}>{description}</Text>
        <Text width={'100%'} px={'2'} py={'1'} fontWeight={'bold'} fontSize={'xs'}>
          <a href="/" alt={title} title={title}>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </Text>
      </VStack>
    </HStack>
  );
};

export default Card;
