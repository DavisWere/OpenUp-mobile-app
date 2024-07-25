import api from './api';

// // User Registration
// export const registerUser = async (userData) => {
//   try {
//     const response = await api.post('/user/', userData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

export const registerUser = async(userData) => {
  try {
    const response = await api.post('/user/', userData);
    console.log('Registration Response:', response.data); // Debugging line
    return response.data;
  }
   catch (error) {
    if (error.response) {
      console.error('Registration Error:', error.response); // Debugging line
      throw error.response.data;
    } else {
      console.error('Registration Error:', error.message); // Debugging line
      throw new Error('An unexpected error occurred');
    }

  }
}

export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/token/request/', loginData);
    return response;
  } catch (error) {
    throw error.response;
  }
};

// export const fetchData = async (url) =>{
//   try {
//     const response = await api.get(`${API_BASE_URL}/${url}`);
//     console.log(response);
//     // return response.data;
//   } catch (error) {
//     throw error.response?.data;
//   }
// }

