import styled from 'styled-components';
import React from 'react';
import Icon1 from '../images/aircraft.svg';
import Icon2 from '../images/container.svg';
import Icon3 from '../images/customs-2.svg';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FDB827;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #F1F1F1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 450px;
  padding: 30px;
  box-shadow: 0 1px 8px #f9f9f9e0;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color:#23120B;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const ServicesSection = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard >
          <ServicesIcon src={Icon1} />
          <ServicesH2>Air Freight</ServicesH2>
          <ServicesP>
          Even at long distances, your cargo is in the best hands: With the support of the most advanced systems, qualified and reliable employees are available around the clock to make sure that your load arrives at its final destination safely, cost-efficiently and on time...           </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Sea Freight</ServicesH2>
          <ServicesP>
          we proud to offer complete ocean logistical solutions driven by local decision making, accountability and expertise. We add a personal touch to a wide variety of specialized ocean services, complete with flexible freight rates and optimum transit times...          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Customs Brokerage</ServicesH2>
          <ServicesP>
          Need to clear customs fast? Our experienced technical experts can help your goods clear quickly and efficiently with our customs-clearance network. How? By taking advantage of the latest Customs release initiatives and reviewing your goods...           </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection;
