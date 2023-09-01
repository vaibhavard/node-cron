import cron from 'node-cron';
import fetch from 'node-fetch-native';

const url = 'https://intagpt.onrender.com/';

cron.schedule('*/30 * * * *', async () => {
  try {
    console.log('Sending GET request...');
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.text();
      console.log('GET request successful:', data);
    } else {
      console.error('GET request failed:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
