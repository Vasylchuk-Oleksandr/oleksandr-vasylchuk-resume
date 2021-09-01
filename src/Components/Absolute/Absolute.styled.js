import styled from "@emotion/styled";

export const Absolute = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: 0fr 640px;
  gap: 10px;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(55deg, rgba(17, 166, 164, 1), var(--light-color));
  border-radius: 15px 250px;
  width: 1040px;
  margin-top: 60px;
  margin-left: 100px;
  padding: 20px;
  text-shadow: var(--main-color) 1px 0 10px;
`;

export const Column = styled.div``;

export const Photo = styled.img`
  border-radius: 50vh;
  box-shadow: inset 0px 10px 10px 10px var(--main-color);
  width: 300px;
`;

export const Job = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
  color: var(--white-color);
`;

export const Name = styled.h1`
  font-size: 45px;
  font-weight: 700;
  line-height: 89px;
  color: var(--white-color);
`;

export const Target = styled.p`
  color: var(--white-color);
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
`;
