import { Box, Button } from "@chakra-ui/react";
import { faStore } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ShopNow = () => {
  return (
    <Button
      onClick={() => {
        history.pushState(null, "", "#find-a-store");
        document
          .querySelector("#find-a-store")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      size="lg"
      colorScheme="cyan"
      variant="outline"
      leftIcon={<FontAwesomeIcon icon={faStore} />}
    >
      Shop Now
    </Button>
  );
}