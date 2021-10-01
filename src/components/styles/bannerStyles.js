import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #131313;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  align-items: flex-start;
`;

export const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 3px solid #fff;
  border-radius: 8px;
  background: transparent;
  outline: none;
  color: #fff;
  cursor: pointer;
`;

export const Image = styled(motion.img)`
  position: absolute;
  height: 150px;
  width: 150px;
  max-width: 250px;
  max-hight: 250px;
  border-radius: 100%;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 150px;
    left: 200px;
  }
  ${Image}:nth-child(2) {
    top: 0px;
    right: 200px;
  }
  ${Image}:nth-child(3) {
    bottom: 150px;
    left: 30px;
  }
  ${Image}:nth-child(4) {
    top: 0px;
    left: 500px;
  }
  ${Image}:nth-child(5) {
    bottom: -100px;
    right: 60px;
  }
`;
