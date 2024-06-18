import React from "react";
import {Section, Title, Subtitle} from "@primitives";
import {Row, Spacer} from "@nextui-org/react";
import landingContent from "@content/landing";
import {FeaturesGrid} from "@components";

const LastButNotLeastSection = () => {
  return (
    <Section css={{zIndex: "$10"}}>
      <Spacer css={{"@xsMax": {mt: "$14"}}} y={6} />
      <Row justify="center">
        <Title>Full&nbsp;</Title>
        <Title color="warning">Features</Title>
      </Row>
      <Row justify="center">
        <Subtitle css={{textAlign: "center"}}>Every byte, every growth.</Subtitle>
      </Row>
      <FeaturesGrid features={landingContent.fullFeatures} />
    </Section>
  );
};

export default LastButNotLeastSection;
