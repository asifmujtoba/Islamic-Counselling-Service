export const formatAllContact = rawBooking => {
    return rawBooking.map(contact => {
      const { _id,name, email, phone, message} = contact;
      return {
        _id,
        name, 
        email, 
        phone, 
        message
      };
    });
  };
  