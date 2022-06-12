import {
  Card,
  Col,
  Grid,
  Row,
  Text,
  Image,
  Input,
  Link,
  Button,
} from "@nextui-org/react";
import { Divider } from "antd";
import { Stepper } from "antd-mobile";
import { HeartFill } from "antd-mobile-icons";
import React, { useState } from "react";
import { SendButton } from "../../component/form/SendButton";

const Cart = () => {
  const [sum, setSum] = useState<Number>(45);
  const sumPrice = (value: number) => {
    const price = 45 * value;
    setSum(price);
  };
  return (
    <div className="body-content">
      <Grid.Container gap={2}>
        <Grid xs={24}>
          <Card>
            <Row justify="flex-start">
              <Col span={6}>
                <Image
                  width="100%"
                  css={{ borderRadius: 10 }}
                  showSkeleton
                  maxDelay={10000}
                  src="https://img.freepik.com/free-psd/3d-rendering-delicious-cheese-burger_23-2149108546.jpg?t=st=1654373407~exp=1654374007~hmac=592335e2d51c4d746bb645559999e39b3655cf993938e57f5be90e70fa7f9f19&w=826"
                  alt="Default Image"
                />
              </Col>
              <Col span={11} style={{ paddingLeft: 20 }}>
                <Row>
                  <Col>
                    <Text
                      css={{
                        fontWeight: "$bold",
                        color: "black",
                      }}
                      transform="capitalize"
                    >
                      Burger
                    </Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: 10 }}>
                  <Col>
                    <Text
                      css={{
                        color: "#faad14",
                        fontWeight: "$bold",
                      }}
                      transform="capitalize"
                    >
                      $45
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <Stepper
                    defaultValue={1}
                    min={1}
                    onChange={(value) => {
                      sumPrice(value);
                    }}
                  />
                </Row>
                <Row style={{ marginTop: 4 }} justify="center">
                  <Text
                    css={{
                      color: "#faad14",
                      fontWeight: "$bold",
                    }}
                    transform="capitalize"
                  >
                    Toal ${sum}
                  </Text>
                </Row>
              </Col>
            </Row>
          </Card>
        </Grid>
        <Grid xs={24}>
          <Card>
            <Row justify="flex-start">
              <Col span={6}>
                <Image
                  width="100%"
                  css={{ borderRadius: 10 }}
                  showSkeleton
                  maxDelay={10000}
                  src="https://img.freepik.com/free-psd/3d-rendering-delicious-french-fries_23-2149108544.jpg?t=st=1654373408~exp=1654374008~hmac=93e9324f7d7eabd154a2e268d40defee01e612024c4da34d73117a6dd0cdb4c5&w=740"
                  alt="Default Image"
                />
              </Col>
              <Col span={11} style={{ paddingLeft: 20 }}>
                <Row>
                  <Col>
                    <Text
                      css={{
                        fontWeight: "$bold",
                        color: "black",
                        fontFamily: "Mitr",
                      }}
                      transform="capitalize"
                    >
                      French Fries
                    </Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: 10 }}>
                  <Col>
                    <Text
                      css={{
                        color: "#faad14",
                        fontWeight: "$bold",
                        fontFamily: "Mitr",
                      }}
                      transform="capitalize"
                    >
                      $35
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <Stepper
                    defaultValue={1}
                    min={1}
                    onChange={(value) => {
                      sumPrice(value);
                    }}
                  />
                </Row>
                <Row style={{ marginTop: 4 }} justify="center">
                  <Text
                    css={{
                      color: "#faad14",
                      fontWeight: "$bold",
                      fontFamily: "Mitr",
                    }}
                    transform="capitalize"
                  >
                    Toal $35
                  </Text>
                </Row>
              </Col>
            </Row>
          </Card>
        </Grid>
        <Grid xs={24} style={{ marginTop: 20 }}>
          <Input
            clearable
            contentRightStyling={false}
            size="xl"
            placeholder="Promo Code..."
            contentRight={
              <SendButton>
                <HeartFill color="white" />
              </SendButton>
            }
          />
        </Grid>
        <Grid sm={12} md={5} style={{ width: "100%", marginTop: 80 }}>
          <Card css={{ mw: "100%" }}>
            <Row>
              <Col>
                <Text css={{ fontFamily: "Mitr" }}>Sub Total</Text>
              </Col>
              <Col style={{ textAlign: "end" }}>
                <Text css={{ fontFamily: "Mitr" }}>$35</Text>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col>
                <Text css={{ fontFamily: "Mitr" }}>Discount</Text>
              </Col>
              <Col style={{ textAlign: "end" }}>
                <Text css={{ fontFamily: "Mitr" }}>$5</Text>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col>
                <Text css={{ fontFamily: "Mitr",color:'#84a42c'  }} h4>
                  Total
                </Text>
              </Col>
              <Col style={{ textAlign: "end" }}>
                <Text css={{ fontFamily: "Mitr",color:'#84a42c' }} h4>
                  $30
                </Text>
              </Col>
            </Row>
            <Card.Footer>
              <Button
                style={{ width: "100%", backgroundColor: "#faad14" }}
                iconRight={<HeartFill />}
                auto
                size="xl"
              >
              CHECKOUT
              </Button>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Cart;
