import { Button, Container, Grid} from "@nextui-org/react";
import { StyledCardBlur, Subtitle, Title } from "@primitives";
import { useRouter } from "next/router";
import React from "react";
import Image from 'next/image'


const InstallBanner: React.FC = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("https://fiqwbi.notion.site/Business-Plan-4cf04c5247874e23819a8cf2a011d80e");
  };

  return (
    <StyledCardBlur
      css={{
        br: 0,
        p: 0,
        dflex: "center",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        ml: "-50vw",
        mr: "-50vw",
        border: "1.5px solid $border",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
      }}
    >
      <Container
        lg
        css={{
          ml: 0,
          mr: 0,
          py: "$8",
          "@xsMax": {
            px: "$4",
          },
        }}
      >
        <Grid.Container gap={2}>
          <Grid direction="column" justify="center" md={6} xs={12}>
            <Title css={{fontSize: "2.4rem"}}>Let&apos;s make your dream</Title>
            <Title color="green" css={{fontSize: "2.4rem"}}>
              Come true
            </Title>
            <Subtitle
              css={{
                my: "$2",
                fs: "1.2rem",
                maxW: "100%",
                "@xsMax": {
                  my: "$8",
                },
              }}
            >
              Hubungi kami melalui WhatsApp untuk respon yang cepat
            </Subtitle>
            <Grid.Container alignItems="center" xs={12}>
              <Grid sm={2.5} xs={12}>
                <Button
                  auto
                  rounded
                  color="success"
                  css={{
                    "@xsMax": {
                      width: "100%",
                    },
                  }}
                  onClick={handleGetStartedClick}
                >
                  Whatsapp
                </Button>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid css={{py: "$10"}} md={6} xs={12}>
            <Image   
                  objectFit="cover"
                  width={400}
                  height={350}
                  src="/images/cc.webp"
                  alt="contact by whatsapp"
                  loading='lazy'
                  blurDataURL="URL"
                  placeholder="blur"
                />
          </Grid>
        </Grid.Container>
      </Container>
    </StyledCardBlur>
  );
};

export default InstallBanner;
