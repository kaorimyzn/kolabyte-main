import { Container, CSS, Link, Row, Text, Spacer, Col } from "@nextui-org/react";
import React from "react";

export interface Props {
  css?: CSS;
  containerCss?: CSS;
}

const Footer: React.FC<Props> = ({css, containerCss}) => {
  return (
    <Container
      fluid
      className="footer__container"
      css={{
        zIndex: "$1",
        padding: "$md $sm",
        "@xsMax": {
          padding: "$sm $xs",
        },
        ...containerCss,
      }}
      gap={2}
    >
      <Row css={css} justify="center">
        <Col>
        <Text
          span
          className="footer__copy"
          css={{
            fontSize: '$sm',
            color: '$accents7',
            '@mdMax': {
              fontSize: '$xs'
            }
          }}
        >
          &copy;&nbsp;Copyright&nbsp;2023&nbsp;Kolabyte
        </Text>
        </Col>
        <Spacer x={0.5} />
        <Text
          span
          className="footer__by"
          css={{
            fontSize: "$sm",
            color: "$accents7",
            dflex: "center",
          }}
        >
          Created&nbsp;by&nbsp;
          <Link href="https://kolabyte.com" rel="noreferrer" target="_blank">
            Kolabyte.
          </Link>
        </Text>
      </Row>
    </Container>
  );
};

export default Footer;
