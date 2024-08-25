import React from "react";
import LocationConatiner from "../components/LocationCardItem/LocationConatiner";
import CommonHero from "../components/CommonHero/CommonHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import BookingSystem from "../components/BookingSystem/BookingSystem";
import GoogleMap from "../components/GoogleMap/GoogleMap";

export default function Reservations() {
  return (
    <>
      <CommonHero title={"Reservation"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container-fluid">
        <div className="ak-booking-system-map-from">
          <div className="booking-system-map">
            <GoogleMap addressLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.73048737059764!2d145.0934416438763!3d-37.86394278990328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad641cd5a907f91%3A0x3b51a60c296f4d12!2sBambino&#39;s%20Kebabs!5e0!3m2!1sen!2sin!4v1724563282751!5m2!1sen!2sin" />
            <div className="booking-system-map-second">
              <div className="booking-system-heading">
                <SectionTitle
                  title={"Reservations"}
                  subTitle={"Reservations"}
                  animTwo={true}
                />
                <div className="ak-height-60 ak-height-lg-30"></div>
                <BookingSystem />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <SectionTitle
        title={"Nearby Find Us"}
        subTitle={"Visit Us"}
        tyle={"center"}
      />
      <div className="ak-height-65 ak-height-lg-30"></div>

      <LocationConatiner />
    </>
  );
}
