import { EyeFilled } from "@ant-design/icons";
import { Button, Card, Col, Grid, Input, Row, Text } from "@nextui-org/react";
import { SearchOutline } from "antd-mobile-icons";
import { Card1 } from "../../component/form/Card1";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();
  const list = [
    {
      id: 1,
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      id: 2,
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      id: 3,
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      id: 4,
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      id: 5,
      title: "Advocato",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      id: 6,
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      id: 7,
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      id: 8,
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <>
      <div className="body-content">
        <Row>
          <Input
            clearable
            contentRightStyling={false}
            placeholder="Type your message..."
            contentRight={
              <SearchOutline
                fontSize={20}
                color="#84a42c"
                style={{ marginRight: 15, marginTop: 5 }}
              />
            }
          />
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={4}>
              <Card1 />
            </Grid>
          </Grid.Container>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col style={{ fontWeight: "bold" }}>Most Popular</Col>
          <Col
            onClick={() => history.push("/food")}
            style={{ textAlign: "end", fontWeight: "bold", color: "#84a42c" }}
          >
            See all
          </Col>
        </Row>
        {/* <Row style={{ marginTop: 30 }}>
          <Grid.Container gap={5} justify="center">
            <Grid xs={4} justify="center">
              <Button
                style={{ backgroundColor: "white",fontWeight: "bold", color: "#84a42c" }}
                auto
              >
                Savory
              </Button>
            </Grid>
            <Grid xs={4} justify="center">
              <Button
                style={{ backgroundColor: "white",fontWeight: "bold", color: "#84a42c" }}
                auto
              >
                Sweet
                
              </Button>
            </Grid>
            <Grid xs={4} justify="center">
              <Button
                style={{ backgroundColor: "white", fontWeight: "bold",color: "#84a42c" }}
                auto
              >
               Snack
              </Button>
            </Grid>
          </Grid.Container>
        </Row> */}
        <Row style={{ marginTop: 30 }}>
          <Grid.Container gap={2} justify="flex-start">
            {list.map((item, index) => (
              <Grid xs={6} sm={3} key={index}>
                <Card hoverable clickable onClick={() => history.push(`/food/${item.id}`)}>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      objectFit="cover"
                      src={"https://nextui.org" + item.img}
                      width="100%"
                      height={140}
                      alt={item.title}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <Row wrap="wrap" justify="space-between">
                      <Text b>{item.title}</Text>
                      <Text
                        css={{ color: "$accents4", fontWeight: "$semibold" }}
                      >
                        {item.price}
                      </Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </Row>
      </div>
    </>
  );
};

export default Main;
