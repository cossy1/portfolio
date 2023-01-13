import Head from 'next/head'
import styled from "styled-components";
import {ColorConstants} from "@/styles/colorConstants";


const Wrapper = styled.div`
  color: ${ColorConstants.secondary};
  display: flex;
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
        WELCOME TO NEXT.JS!!!
        </Wrapper>

    </>
  )
}
