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

const contactUserProperty = (id) => 
  catcher(() => axios.post(`${API_URL}${CONTACT_PROPERTY_URL}${id}`))

const getHauserBookingList = (id) => 
  catcher(() => axios.get(`${API_URL}${HAUSER_BOOKING_LIST_URL}${id}`))

const bookingProperty = (id) => 
  catcher(() => axios.post(`${API_URL}${BOOKING_PROPERTY_URL}${id}`))

const getUserMessages = (id) => 
  catcher(() => axios.get(`${API_URL}${USER_MESSAGES_URL}${id}`))

const getUserProfile = (id) => 
  catcher(() => axios.get(`${API_URL}${USER_PROFILE_URL}${id}`))

const userComment = (id) => 
  catcher(() => axios.get(`${API_URL}${USER_COMMENTS_URL}${id}`))

const getPropertyDetail = (id) => 
  catcher(() => axios.get(`${API_URL}${DETAIL_PROPERTY_URL}${id}`))

const getPropertyListLocation = (location) => 
  catcher(() => axios.get(`${API_URL}${location}${PROPERTY_LOCATION_URL}`))

export const UserRoutes = {
  [LOGIN_URL]: getLogin,
  [LOGOUT_URL]: getLogout,
  [USER_REGISTRER_URL]: registrerUser,
  [HAUSER_BOOKING_LIST_URL]: getHauserBookingList,
  [USER_MESSAGES_URL]: getUserMessages,
  [BOOKING_PROPERTY_URL]: bookingProperty,
  [CONTACT_PROPERTY_URL]: contactUserProperty,
  [USER_PROFILE_URL]: getUserProfile,
  [USER_COMMENTS_URL]: userComment
}

export const PropertiesRoutes = {
  [CREATE_PROPERTY_URL]: createProperty,
  [DETAIL_PROPERTY_URL]: getPropertyDetail,
  [PROPERTY_LOCATION_URL]: getPropertyListLocation
}

export const GeneralRoutes = {
  [HOME_URL]: getHome
}
