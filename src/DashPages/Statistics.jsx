import  { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const Statistics = () => {
  const [publisherData, setPublisherData] = useState([]);

  useEffect(() => {
    
    const fetchPublisherData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/articles');
        const articles = response.data.articles;
        
        const publisherCount = {};
        articles.forEach(article => {
          const publisher = article.publisher;
          if (publisherCount[publisher]) {
            publisherCount[publisher]++;
          } else {
            publisherCount[publisher] = 1;
          }
        });

        
        const formattedData = [['Publisher', 'Articles']];
        for (const publisher in publisherCount) {
          formattedData.push([publisher, publisherCount[publisher]]);
        }
         console.log(formattedData);
         
        setPublisherData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPublisherData();
  }, []);

  return (
    <div>
      <h2 className="text-center text-xl font-bold mb-4">Article Distribution by Publisher</h2>
      
      <Chart
        chartType="PieChart"
        data={publisherData}
        options={{
          title: 'Articles by Publisher',
          is3D: true,
          slices: {
            0: { offset: 0.1 },
            1: { offset: 0.1 },
          },
        }}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default Statistics;