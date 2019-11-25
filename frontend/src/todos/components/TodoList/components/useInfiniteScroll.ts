import {useState, useEffect} from 'react';

export const useInfiniteScroll = (callUpdate: any) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => {
         window.removeEventListener('scroll', handleScroll);
     }
  }, []);

  useEffect(() => {
     if (!isFetching) return;
     callUpdate();
  }, [isFetching]);

  const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
      setIsFetching(true);
  };

  return [isFetching, setIsFetching];
};
