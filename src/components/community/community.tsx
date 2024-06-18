import React from "react";
import dynamic from "next/dynamic";
import {Grid, Text, Row, Spacer} from "@nextui-org/react";
import {Twitter, Discord, Github, Tiktok} from "@components";
import {Title, Subtitle} from "@primitives";
import withDefaults from "@utils/with-defaults";

import {StyledCommunityCard} from "./styles";
export interface CommunityProps {
  twitter?: string;
  github?: string;
  discord?: string;
  tiktok?: string;
}

const defaultProps = {
  twitter: "https://twitter.com/kolabyte_",
  github: "https://youtube.com/@kolabyte3445",
  discord: "https://instagram.com/kolabyte_",
  tiktok: "https://www.tiktok.com/@kolabyte",
};

const DynamicLopperBG = dynamic(() => import("../looper-bg"), {
  ssr: false,
});

const Community: React.FC<CommunityProps> = ({twitter, github, discord, tiktok}) => {
  return (
    <Grid.Container css={{position: "relative"}} gap={2} justify="center">
      <Grid css={{mb: "$10"}} direction="column" xs={12}>
        <Row justify="center">
          <Title css={{textAlign: "center"}}>Contact Us</Title>
        </Row>
        <Row justify="center">
          <Subtitle css={{textAlign: "center"}}>
          Kami sangat senang dan menghargai kerjasama dan kolaborasi. Kami menunggu kedatangan Anda!
          </Subtitle>
        </Row>
      </Grid>
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard href={twitter} rel="noopener noreferrer" target="_blank">
          <Row align="center" justify="flex-start">
            <Twitter fill="#00ACEE" size={30} />
            <Spacer x={0.4} />
            <Text h5>Twitter</Text>
          </Row>
          <Spacer y={0.5} />
          <Row align="center" justify="flex-start">
            <Text css={{color: "$accents8", textAlign: "left"}}>
            Untuk pengumuman, tips, dan informasi umum. Hubungi kami untuk info lebih lanjut.
            </Text>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard href={discord} rel="noopener noreferrer" target="_blank">
          <Row align="center" justify="flex-start">
            <Discord fill="#AD378B" size={30} />
            <Spacer x={0.4} />
            <Text h5>Instagram</Text>
          </Row>
          <Spacer y={0.5} />
          <Row align="center" justify="flex-start">
            <Text css={{color: "$accents8"}}>
            Untuk terlibat dalam komunitas, melihat portofolio, pengumuman, tips, dan informasi umum. Ikuti kami untuk info lebih lanjut.
            </Text>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard href={github} rel="noopener noreferrer" target="_blank">
          <Row align="center" justify="flex-start">
            <Github fill="#F20000" size={30} />
            <Spacer x={0.4} />
            <Text h5>Youtube</Text>
          </Row>
          <Spacer y={0.5} />
          <Row align="center" justify="flex-start">
            <Text css={{color: "$accents8"}}>Untuk terlibat dalam komunitas, melihat portofolio, pengumuman, tips, dan informasi umum. Tonton video kami.</Text>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <DynamicLopperBG
        css={{
          zIndex: "-$1",
          position: "absolute",
          transform: "translate(5%, -70%)",
        }}
      />
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard href={tiktok} rel="noopener noreferrer" target="_blank">
          <Row align="center" justify="flex-start">
            <Tiktok size={30} />
            <Spacer x={0.4} />
            <Text h5>Tiktok</Text>
          </Row>
          <Spacer y={0.5} />
          <Row align="center" justify="flex-start">
            <Text css={{color: "$accents8"}}>Untuk terlibat dalam komunitas, melihat portofolio, pengumuman, tips, dan informasi umum di TikTok, tonton video kami dan ikuti akun kami.</Text>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <DynamicLopperBG
        css={{
          zIndex: "-$1",
          position: "absolute",
          transform: "translate(5%, -70%)",
        }}
      />
    </Grid.Container>
  );
};

export default withDefaults(Community, defaultProps);
