export const initialState = {
  snackbarData: {
    show: false,
    label: '',
    type: '',
  },
  userInfo: {
    firstName: '',
    lastName: '',
    username: '',
    token: '',
    type: ''
  },
  posts: {
    generalPosts: [],
    profilePosts: [],
    showPostForm: false,
    newPostsAvailable: false,
    postFormData: {
      type: 'create',
      status: false,
      postData: { id: '', content: '' },
    },
    postSectionVisible: false,
  },
  booking: {
    generalBooking: [],
    profileBooking:[],
    upcomingBooking:[],
    showBookingForm: false,
    newBookingAvailable: false,
    upcomingBookingAvailable: false,
    bookingFormData: {
      type: 'create',
      status: false,
      bookingData: { id: '', date: '', time: '',  consultant: '', subject: '' },
    },
    bookingSectionVisible: false,
  }
};
