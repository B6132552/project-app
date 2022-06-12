import { Card, Col, Text } from "@nextui-org/react";
import card from "../../assets/images/card1.jpg"
export const Card1 = () => (
  <Card cover>
    {/* <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header> */}
    <Card.Image
      src={card}
      height={130}
      width="100%"
      alt="Card image background"
    />
  </Card>
);