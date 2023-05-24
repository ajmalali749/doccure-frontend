import React from "react";
import Booking from "../../components/ClientComponent/bookingcomponent/Booking";
import NavbarComponent from "../../components/HomeComponents/NavbarComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";

function BookingPage() {
  return (
    <div>
      <div>
        <NavbarComponent />
        <Booking />
     
      </div>
    </div>
  );
}

export default BookingPage;
