import { Heart } from "@components";
import { Sponsor } from "@lib/docs/sponsors";
import { Button, Card, Grid, Link, Row, Spacer, Text } from "@nextui-org/react";
import { Section, Subtitle, Title } from "@primitives";
import { pulse } from "@utils/animations";
import React from "react";

const list = [
  {
    title: "Orange",
    img: "/portofolio/kolabyte.webp",
    link: "https://fiqlab.dev"
  },
  {
    title: "Tangerine",
    img: "/portofolio/kolabyte.webp",
    link: "https://fiqlab.dev"
  },
  {
    title: "Cherry",
    img: "/portofolio/kolabyte.webp",
    link: "https://fiqlab.dev"
  },
  {
    title: "Lemon",
    img: "/portofolio/kolabyte.webp",
    link: "https://fiqlab.dev"
  },
];

export interface SupportSectionProps {
  sponsors: Sponsor[];
}

const SupportSection: React.FC<SupportSectionProps> = () => {

  return (
    <Section css={{zIndex: "$10"}}>
      <Spacer css={{"@xsMax": {mt: "$14"}}} y={6} />
      <Row
        align="center"
        css={{
          svg: {
            animation: `${pulse} 2.5s infinite`,
          },
        }}
        justify="center"
      >
        <Title css={{mr: "$6"}}>Our Work</Title>
        <Heart filled fill="#FF4ECD" size={50} />
      </Row>
      <Row justify="center">
        <Subtitle css={{textAlign: "center", maxW: "920px"}}>
        Nikmati keunggulan Kolabyte, hasil kerja kami yang luar biasa akan membuktikan kualitas kami.
        </Subtitle>
      </Row>
      <Spacer y={2} />
      <Grid.Container gap={2} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={16} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://kolabyte.vercel.app/" + item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
              </Row>
                <Button flat auto rounded color="secondary">
                  <Link href={item.link}>
                  <Text
                    css={{
                      textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    🖥️ View
                  </Text>
                  </Link>
                </Button>
            </Card.Footer>
          </Card>
        </Grid>
        
      ))}</Grid.Container>
      <Spacer y={7} />
    </Section>
  );
};

export default SupportSection;
