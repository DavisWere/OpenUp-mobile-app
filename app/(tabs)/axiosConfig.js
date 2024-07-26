import api from './api';

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
};


// User Login
export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/token/request/', loginData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

