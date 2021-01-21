import newsletter from "../services/newsletter";

export const formatAllNewsletter = rawBooking => {
    return rawBooking.map(newsletter => {
      const {email} = newsletter;
      return {
        email, 
      };
    });
  };
  