import * as React from "react";
import {InView} from "react-intersection-observer";
import cn from "classnames";
import Image from 'next/image'
import {Section, Title, Subtitle, Box} from "@primitives";
import {Grid, Row, Col, Text, Collapse, Spacer} from "@nextui-org/react";

const items = [
  {
    id: "property_shorthands",
    title: "Branding",
    description:
      "Layanan branding Kolabyte dirancang untuk membantu klien membuat merek yang kuat dan konsisten yang cocok dengan audiens target mereka dan membedakan mereka dari pesaing mereka.",
  },
  {
    id: "property_bundles",
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Kolabyte menawarkan layanan iklan PPC yang meliputi pengaturan akun, pembuatan dan pengelolaan kampanye, dan pelacakan konversi. Kami bisa bantu bisnis mencapai audiens yang dituju melalui iklan pencarian.",
  },
  {
    id: "simplify_syntax",
    title: "Display Advertising",
    description:
      "Layanan Display Advertising Kolabyte bisa bantu klien meningkatkan kesadaran merek dan meningkatkan konversi dengan menempatkan iklan yang indah secara visual di situs web dan platform yang ramai.",
  },
];

const BuiltInStitchesSection = () => {
  const [activeItem, setActiveItem] = React.useState(items[0]);

  const handleChange = (value: number) => {
    setActiveItem(items[value - 1]);
  };

  return (
    <InView as="section" className="inview-section">
      <Spacer css={{"@xsMax": {mt: "$16"}}} y={10} />
      <Section css={{position: "relative"}}>
        <Box
          css={{
            position: "absolute",
            top: 0,
            left: "-10%",
            zIndex: "-$1",
            "@xsMax": {
              top: "20%",
              left: "-90%",
            },
          }}
        >
          <img alt="theming background" width="100%" height="100%" src="/stitches-gradient.svg" />
        </Box>
        <Row justify="flex-start">
          <Title>One</Title>
          <Title color="violet">&nbsp;agency,</Title>
        </Row>
        <Row justify="flex-start">
          <Title>endless possibilities.</Title>
        </Row>
        <Subtitle>
        Buka potensi penuh bisnis Anda dengan berbagai layanan pemasaran digital kami, 
        termasuk iklan PPC, Branding, dan Display Advertising. Biarkan tim ahli kami 
        memandu Anda melalui medan digital yang terus berkembang dan membantu Anda mencapai tujuan bisnis Anda.
        </Subtitle>
        <Grid.Container gap={2}>
          <Grid
            css={{
              pl: 0,
              "@xsMax": {
                pr: "0",
              },
            }}
            sm={6}
            xs={12}
          >
            <Col>
              <Collapse.Group accordion onChange={handleChange}>
                {items.map(({id, title, description}) => (
                  <Collapse
                    key={id}
                    className={cn({active: activeItem.id === id})}
                    css={{
                      br: "$lg",
                      border: "none",
                      p: "0 $lg",
                      margin: "$md 0",
                      "& .nextui-collapse-title": {
                        color: "$accents4",
                        fontSize: "1.7rem",
                        transition: "color 0.2s ease-in-out",
                      },
                      "&.active": {
                        bf: "saturate(180%) blur(14px)",
                        bg: "rgba(255, 255, 255, 0.05)",
                        boxShadow: "$md",
                      },
                      "&.active .nextui-collapse-view": {
                        pb: 0,
                      },
                      "&.active .nextui-collapse-title": {
                        color: "$text",
                      },
                      "&:hover": {
                        "&:not(.active) .nextui-collapse-title": {
                          color: "$accents7",
                        },
                      },
                    }}
                    expanded={id === items[0].id}
                    showArrow={false}
                    title={title}
                  >
                    <Text
                      css={{
                        fs: "1.4rem",
                        color: "$accents6",
                        "@xsMax": {
                          fs: "1rem",
                        },
                      }}
                    >
                      {description}
                    </Text>
                  </Collapse>
                ))}
              </Collapse.Group>
            </Col>
          </Grid>
          <Grid
            css={{
              pr: 0,
              mt: "$9",
              "@mdMax": {
                pl: "0",
              },
              "@xsMax": {
                mt: "$18",
              },
            }}
            sm={6}
            xs={12}
          >
            <Col
              css={{
                dflex: "center",
                fd: "column",
                ai: "flex-start",
                h: "100%",
                mt: "-10%",
              }}
            >
              <Image   
                objectFit="cover"
                width={638}
                height={325}
                src="/images/illus.webp"
                alt="Hero image"
                blurDataURL="URL"
                placeholder="blur"
              />
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default BuiltInStitchesSection;
