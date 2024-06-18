import { Col, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { Box, Section, Subtitle, Title } from "@primitives";
import { darkTheme } from "@theme/shared";
import { InView } from "react-intersection-observer";
import Image from 'next/image'


const DarkModeSection = () => {

  return (
    <InView as="section" className="inview-section">
      <Spacer css={{"@xsMax": {mt: "$14"}}} y={10} />
      <Section css={{position: "relative", zIndex: "$10"}}>
        <Box
          css={{
            position: "absolute",
            top: "-25%",
            left: "-20%",
            zIndex: "-$1",
            [`.${darkTheme} &`]: {
              left: "30%",
              right: "-30%",
              "@xsMax": {
                right: "-50%",
              },
            },
            "@xsMax": {
              top: "10%",
              right: "-50%",
              left: "0",
            },
          }}
        >
          <img alt="dark mode background" width="100%" height="100%"src="/dark-mode-gradient.svg" />
        </Box>
        <Row justify="flex-start">
          <Title>Dominating search engine</Title>
        </Row>
        <Row justify="flex-start">
          <Title>results with</Title>
          <Spacer x={0.5} />
          <Title color="violet">SEO.</Title>
        </Row>
        <Subtitle>
        Kami menawarkan berbagai layanan SEO termasuk riset kata kunci, optimasi halaman, pembangunan link, dan SEO lokal. Ahli SEO kami dapat membantu bisnis meningkatkan visibilitas di hasil halaman mesin pencari (SERP) dan meningkatkan traffic ke website mereka.
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
            <Col css={{
                dflex: "center",
                fd: "column",
                h: "100%",
              }}>
              <Image   
                objectFit="cover"
                width={638}
                height={325}
                src="/images/before_seo.webp"
                alt="Before SEO Kolabyte"
                blurDataURL="URL"
                placeholder="blur"
              />
              <Text css={{color: "$accents6", fontSize: "$xl"}}>Before</Text>
            </Col>
          </Grid>
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
            <Col css={{dflex: "center", fd: "column", h: "100%"}}>
            <Image   
                objectFit="cover"
                width={638}
                height={325}
                src="/images/after_seo.webp"
                alt="After SEO Kolabyte"
                blurDataURL="URL"
                placeholder="blur"
              />
              <Text css={{color: "$text", fontSize: "$xl"}}>After</Text>
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default DarkModeSection;
