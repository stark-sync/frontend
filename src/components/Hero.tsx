// import Image from "next/image";

import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

// import backgroundImage from "@/images/background.jpg";

export function Hero() {
  const router = useRouter();
  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <Flex
        direction="column"
        className="mx-auto max-w-4xl lg:max-w-4xl lg:px-6"
        align="center"
      >
        <h1 className="font-display text-6xl font-bold sm:text-7xl">
          <Heading className="block text-center" size="9" highContrast>
            StarkSync
          </Heading>
          <Text className="block text-center text-sm">
            A protocol for active liquidity management and market making
            strategies on Starknet
          </Text>
        </h1>
        <Text className="font-display space-y-6 text-2xl tracking-wide" mt="8">
          Project Under active development
        </Text>
        <Button
          onClick={() => router.push("/#")}
          className="w-64 cursor-pointer"
          size="3"
          mt="9"
        >
          Start Now!
        </Button>
      </Flex>
    </div>
  );
}
