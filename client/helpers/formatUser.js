export const formatAllUsers = rawBooking => {
    return rawBooking.map(users => {
      const { _id,firstName, lastName, username, booking, type} = users;
      return {
        _id,
        firstName,
        lastName,
        username,
        booking,
        type
      };
    });
  };
  