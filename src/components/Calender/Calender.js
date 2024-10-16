import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 50px 0;
  @media (max-width: 960px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 16px;
  }
`;

const CalendarFrame = styled.iframe`
  border: 0;
  width: 800px;
  height: 600px;
  @media (max-width: 960px) {
    width: 100%;
    height: 500px;
  }
`;

const Calendar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>My Google Calendar</Title>
        <Desc>Here are my upcoming events and availability.</Desc>
        <CalendarFrame
          src="https://calendar.google.com/calendar/embed?src=chandusiriyala7%40gmail.com&ctz=Asia%2FKolkata"
          frameborder="0"
          scrolling="no"
        />
      </Wrapper>
    </Container>
  );
};

export default Calendar;
