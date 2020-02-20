import axios from 'axios';

import {
  API_URL,
  HOME_URL,
  LOGIN_URL,
  LOGOUT_URL,
  CREATE_PROPERTY_URL,
  USER_REGISTRER_URL,
  CONTACT_PROPERTY_URL,
  HAUSER_BOOKING_LIST_URL,
  BOOKING_PROPERTY_URL,
  USER_MESSAGES_URL,
  USER_PROFILE_URL,
  USER_COMMENTS_URL,
  DETAIL_PROPERTY_URL,
  PROPERTY_LOCATION_URL
} from './constants';

const catcher = async fn => {
  try {
    return (await fn()).data
  } catch(error) {
    return []
  }
}

const getHome = () => 
  catcher(() => axios.get(`${API_URL}`))

const getLogin = () =>
  catcher(() => axios.post(`${API_URL}${LOGIN_URL}`))

const getLogout = () =>
  catcher(() => axios.post(`${API_URL}${LOGOUT_URL}`))

const createProperty = () =>
  catcher(() => axios.post(`${API_URL}${CREATE_PROPERTY_URL}`))

const registrerUser = () =>
  catcher(() => axios.post(`${API_URL}${USER_REGISTRER_URL}`))

const contactUserProperty = () => 
  catcher(() => axios.post(`${API_URL}${CONTACT_PROPERTY_URL}`))

const getHauserBookingList = () => 
  catcher(() => axios.get(`${API_URL}${HAUSER_BOOKING_LIST_URL}`))

const bookingProperty = () => 
  catcher(() => axios.post(`${API_URL}${BOOKING_PROPERTY_URL}`))

const getUserMessages = () => 
  catcher(() => axios.get(`${API_URL}${USER_MESSAGES_URL}`))

const getUserProfile = () => 
  catcher(() => axios.get(`${API_URL}${USER_PROFILE_URL}`))

const userComment = () => 
  catcher(() => axios.get(`${API_URL}${USER_COMMENTS_URL}`))

const getPropertyDetail = () => 
  catcher(() => axios.get(`${API_URL}${DETAIL_PROPERTY_URL}`))

const getPropertyListLocation = () => 
  catcher(() => axios.get(`${API_URL}${PROPERTY_LOCATION_URL}`))

export const diHauseRoutes = {
  [HOME_URL]: getHome,
  [LOGIN_URL]: getLogin,
  [LOGOUT_URL]: getLogout,
  [CREATE_PROPERTY_URL]: createProperty,
  [USER_REGISTRER_URL]: registrerUser,
  [CONTACT_PROPERTY_URL]: contactUserProperty,
  [HAUSER_BOOKING_LIST_URL]: getHauserBookingList,
  [BOOKING_PROPERTY_URL]: bookingProperty,
  [USER_MESSAGES_URL]: getUserMessages,
  [USER_PROFILE_URL]: getUserProfile,
  [USER_COMMENTS_URL]: userComment,
  [DETAIL_PROPERTY_URL]: getPropertyDetail,
  [PROPERTY_LOCATION_URL]: getPropertyListLocation
}