import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EverythingCard from './EverythingCard';
import Loader from './Loader';

function CountryNews() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const pageSize = 6;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/news?country=${params.country}&page=${page}&pageSize=${pageSize}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.articles || []);
        setTotalResults(result.totalResults || 0);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [params.country, page]);

  const handlePrev = () => page > 1 && setPage(page - 1);
  const handleNext = () => page < Math.ceil(totalResults / pageSize) && setPage(page + 1);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>Error: {error}</div>}
      {!isLoading && !error && data.map((article, index) => (
        <EverythingCard key={index} article={article} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={page >= Math.ceil(totalResults / pageSize)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CountryNews;
