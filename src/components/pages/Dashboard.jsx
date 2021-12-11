import "../../styles/App.scss";
import React from "react";
import { selectContact } from "../../features/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BiBed, BiLogIn, BiLogOut } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { Calendar } from "../Calendar";
import { TiDeleteOutline } from "react-icons/ti";
import { ReviewList } from "../ReviewList";

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto;
  grid-gap: 50px;
`;

const StyledKpi = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  min-width: 340px;
  min-height: 125px;
  background-color: ${(props) => props.theme.colors.main_white};
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
`;

const StyledKpiData = styled.div``;

const StyledIconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  padding: 8px;
  margin: 0 22px 0 30px;
  background-color: ${(props) => props.theme.colors.flesh};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.red};
  font-size: 30px;
  &:hover {
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.flesh};
  }
`;

export const StyledBigPanelHeader = styled.div`
  margin: 25px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.letter_grey_dark};
`;

export const StyledBigPanel = styled.div`
  min-height: 513px;
  background-color: ${(props) => props.theme.colors.main_white};
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  padding: 30px;
`;

export const StyledReviewPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  min-width: 431px;
  height: 275px;
  margin: auto 0;
  margin-right: 40px;
  padding: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid ${(props) => props.theme.colors.border_grey_light};
  border-radius: 20px;
  &:hover {
    box-shadow: 0px 16px 30px #00000014;
  }
`;

export const StyledDeleteReview = styled(TiDeleteOutline)`
  font-size: 28px;
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
`;

export function Dashboard() {
  const myContact = useSelector(selectContact);
  return (
    <StyledGrid style={{ gridColumnStart: "1", gridColumnEnd: "2" }}>
      <StyledKpi>
        <StyledIconBackground>
          <BiBed />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 30px/46px Poppins" }}>
            8,461
          </div>
          <div
            style={{
              font: "normal normal 300 14px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            New Booking
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledKpi style={{ gridColumnStart: "2", gridColumnEnd: "3" }}>
        <StyledIconBackground>
          <BsCalendarCheck />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 30px/46px Poppins" }}>963</div>
          <div
            style={{
              font: "normal normal 300 14px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            Scheduled Room
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledKpi style={{ gridColumnStart: "3", gridColumnEnd: "4" }}>
        <StyledIconBackground>
          <BiLogIn />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 30px/46px Poppins" }}>753</div>
          <div
            style={{
              font: "normal normal 300 14px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            Check In
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledKpi style={{ gridColumnStart: "4", gridColumnEnd: "5" }}>
        <StyledIconBackground>
          <BiLogOut />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 30px/46px Poppins" }}>516</div>
          <div
            style={{
              font: "normal normal 300 14px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            Check Out
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledBigPanel
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "3",
          gridRowStart: "2",
          gridRowEnd: "4",
        }}
      >
        <Calendar />
      </StyledBigPanel>
      <StyledBigPanel
        style={{
          gridColumnStart: "3",
          gridColumnEnd: "5",
          gridRowStart: "2",
          gridRowEnd: "4",
        }}
      >
        <StyledBigPanelHeader>Reservation Stats</StyledBigPanelHeader>
      </StyledBigPanel>
      <StyledBigPanel
        style={{
          minHeight: "433px",
          gridColumnStart: "1",
          gridColumnEnd: "5",
          gridRowStart: "4",
          gridRowEnd: "5",
        }}
      >
        <StyledBigPanelHeader>Booking data</StyledBigPanelHeader>
      </StyledBigPanel>
      <StyledBigPanel
        style={{
          width: "auto",
          minHeight: "433px",
          gridColumnStart: "1",
          gridColumnEnd: "5",
          gridRowStart: "5",
          gridRowEnd: "7",
          overflowY: "hidden",
          overflowX: "auto",
        }}
      >
        <StyledBigPanelHeader>Latest Review by Customers</StyledBigPanelHeader>
        <ReviewList/>
      </StyledBigPanel>
    </StyledGrid>
  );
}
