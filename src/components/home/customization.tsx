import React, {useState} from "react";
import {InView} from "react-intersection-observer";
import {Box, Section, Title, Subtitle} from "@primitives";
import {Grid, Row, Col, Spacer} from "@nextui-org/react";
import landingContent from "@content/landing";
import {darkTheme} from "@theme/shared";
import {CodeDemoBlock, CustomButton, Blockholder} from "@components";

const CustomizationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer css={{"@xsMax": {mt: "$14"}}} y={10} />
      <Section css={{position: "relative"}}>
        <Box
          css={{
            position: "absolute",
            top: "-30%",
            right: "-35%",
            zIndex: "-$1",
            [`.${darkTheme} &`]: {
              top: "-30%",
              left: "-35%",
            },
          }}
        >
          <img width="60%" height="60%" alt="customization background" src="/customization-gradient.svg" />
        </Box>
        <Row justify="flex-start">
          <Title>Email marketing</Title>
        </Row>
        <Row justify="flex-start">
          <Title>made</Title>
          <Title color="green">&nbsp;easy.</Title>
        </Row>
        <Subtitle>
        Kolabyte menawarkan layanan pemasaran email yang meliputi pembangunan daftar email, pembuatan kampanye email, 
        dan otomatisasi email. Kami mengkhususkan diri dalam menciptakan kampanye email yang indah secara visual dan 
        efektif yang mendorong konversi dan meningkatkan interaksi pelanggan.
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
            <Col
              css={{
                dflex: "center",
                fd: "column",
                ai: "flex-start",
                h: "100%",
              }}
            >
              {isVisible ? (
                <CodeDemoBlock
                  showWindowIcons
                  css={{
                    maxHeight: 320,
                    bs: "$lg",
                  }}
                  language="jsx"
                  value={landingContent.customizationCode}
                />
              ) : (
                <Blockholder height="360px" />
              )}
            </Col>
          </Grid>
          <Grid
            css={{
              pr: 0,
              mt: "$9",
              "@mdMax": {
                pl: "0",
              },
            }}
            sm={6}
            xs={12}
          >
            <Box css={{size: "100%", height: 320}}>
              <Col
                css={{
                  dflex: "center",
                  fd: "column",
                  height: "100%",
                  br: "$lg",
                  bg: "linear-gradient(to right, #4ade80, #06b6d4)",
                }}
              >
                <CustomButton />
              </Col>
            </Box>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default CustomizationSection;
