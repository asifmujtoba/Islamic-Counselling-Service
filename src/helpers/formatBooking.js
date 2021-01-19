export const formatAllBooking = rawBooking => {
    return rawBooking.map(booking => {
      const { _id, date, time, consultant, subject, message, user } = booking;
      return {
        _id,
        date,
        time,
        consultant,
        subject,
        message,
        user
      };
    });
  };
  
  export const formatUserBooking = rawBooking => {
    return rawBooking.booking.map(booking => {
      const { _id,  date, time, consultant, subject } = booking;
      return {
        _id,
        date,
        time,
        consultant,
        subject,
        message
      };
    });
  };
  