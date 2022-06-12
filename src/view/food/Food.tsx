import {
  Button,
  Card,
  Col,
  Grid,
  Image,
  Row,
  Text,
} from "@nextui-org/react";
import { HeartFill } from "antd-mobile-icons";

const Food = () => {
  return (
    <>
      <Image
        showSkeleton
        maxDelay={10000}
        src="https://nextui.org/images/fruit-1.jpeg"
        alt="Default Image"
      />
      <Grid.Container gap={2}>
        <Grid sm={24} md={5} style={{ width: "100%", marginTop: "-30px" }}>
          <Card
            css={{
              mw: "100%",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              // height: "46vh",
            }}
            style={{ height: "46vh" }}
          >
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text h4>Orange</Text>
              </Col>
              <Col style={{ textAlign: "end" }}>
                <Text style={{ marginRight: 10 }} color="#84a42c" h4>
                  $45
                </Text>
              </Col>
            </Row>
            <Text css={{fontFamily: "Mitr",marginTop:6}}>🚀 Beautiful and modern React UI library.</Text>
            <Text css={{fontFamily: "Mitr" ,fontSize: 14}} color="#C9C9C9" style={{marginTop: 10}}>
              ส้ม เป็นไม้พุ่มหรือไม้ต้นขนาดเล็กหลายชนิด เป็นพืชใบเลี้ยงคู่ สกุล
              Citrus วงศ์ Rutaceae มีด้วยกันนับร้อยชนิด เติบโตกระจายอยู่ทั่วโลก
              โดยมากจะมีน้ำมันหอมระเหยในใบ ดอก และผล และมีกลิ่นฉุน
              หากนำใบขึ้นส่องกับแสงแดด จะเห็นจุดเล็กๆ เต็มไปหมด
              ซึ่งจุดเหล่านั้นก็คือแหล่งน้ำมันนั่นเอง ส้มหลายชนิดรับประทานได้
              ผลมีรสเปรี้ยวหรือหวาน มักจะมีแคลเซียม โปแทสเซียม วิตามินเอ และ
              วิตามินซี มากเป็นพิเศษ 
            </Text>
            <Card.Footer style={{ height: 110 }}>
              <Button
                style={{ width: "100%", backgroundColor: "#84a42c" }}
                iconRight={<HeartFill />}
                auto
                size="xl"
              >
                Add To Card
              </Button>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Food;
