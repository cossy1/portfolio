import Head from "next/head";
import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";
import { HomeCard } from "@/components/HomeCard";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

const Wrapper = styled.div`
  color: ${ColorConstants.accent};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Onyekwuo Cosmas - Portfolio</title>
        <meta name="description" content="Onyekwuo Cosmas portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <HomeCard />
        <Experience />
        <About />
        <Skills />
        <Projects />
      </Wrapper>
    </>
  );
}
