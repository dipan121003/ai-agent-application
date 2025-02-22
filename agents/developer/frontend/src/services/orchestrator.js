// src/services/orchestrator.js
import axios from 'axios';

export const submitPrompt = async (prompt) => {
  try {
    // Replace this URL with your actual orchestrator API endpoint.
    const response = await axios.post('http://localhost:5000/api/parse-prompt', { prompt });
    return response.data;
  } catch (error) {
    console.error('Error submitting prompt:', error);
    return { error: 'Failed to fetch tasks. Please try again later.' };
  }
};
