
// Fetch visitor count from the API and display it on the website
async function getVisitorCount() {
    const counterElement = document.getElementById('visitor-counter');
    try {
      const response = await fetch('https://<your-api-endpoint>/api/visitor-count');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      counterElement.textContent = `Visitors: ${data.count}`;
    } catch (error) {
      console.error('Error fetching visitor count:', error);
      counterElement.textContent = 'Visitors: Error fetching count';
    }
  }
  
  document.addEventListener('DOMContentLoaded', getVisitorCount);
  