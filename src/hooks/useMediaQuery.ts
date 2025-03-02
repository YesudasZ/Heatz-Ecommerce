import { useState, useEffect } from 'react';

/**
 * A custom hook that returns a boolean indicating if the current viewport
 * matches the specified media query string
 * 
 * @param query - CSS media query string
 * @returns boolean indicating if the media query matches
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Create a media query list
    const mediaQueryList = window.matchMedia(query);
    
    // Set the initial value
    setMatches(mediaQueryList.matches);

    // Define the change handler
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add the event listener
    mediaQueryList.addEventListener('change', handler);

    // Clean up the event listener
    return () => {
      mediaQueryList.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;