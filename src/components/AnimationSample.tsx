import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//@ts-ignore
import p1 from "../images/p1.png";
//@ts-ignore
import p2 from "../images/p2.png";
//@ts-ignore
import p3 from "../images/p3.png";
//@ts-ignore
import p4 from "../images/p4.png";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-tempalate-colums: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 50%;
  height: 35%;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: -250px;
  }
  ${Image}:nth-child(2) {
    top: 110px;
    left: 200px;
  }
  ${Image}:nth-child(3) {
    top: 320px;
    left: -110px;
  }
  ${Image}:nth-child(4) {
    top: 500px;
    left: 175px;
  }
`;
export const HR = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Animation sample
            </motion.h1>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              with some randmness
            </motion.p>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#46c5db",
                border: "none",
                color: "#000",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              Get started
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={p1}
              alt="p1"
              whileTap={{ scale: 0.8 }}
              drag={true}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            ></Image>
            <Image
              src={p2}
              alt="p2"
              whileTap={{ scale: 0.8 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 250 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            ></Image>
            <Image
              src={p3}
              alt="p3"
              whileTap={{ scale: 0.7 }}
              drag={true}
              dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            ></Image>
            <Image
              src={p4}
              alt="p4"
              whileTap={{ scale: 0.8 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 250 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            ></Image>
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
};
