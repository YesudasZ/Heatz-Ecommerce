// import { useState, useEffect } from "react";

// const useMediaQuery = (query: string): boolean => {

//   const [matches, setMatches] = useState<boolean>(false);

//   useEffect(() => {

//     const mediaQueryList = window.matchMedia(query);
//     setMatches(mediaQueryList.matches);

//     const handler = (event: MediaQueryListEvent) => {
//       setMatches(event.matches);
//     };

//     mediaQueryList.addEventListener("change", handler);
 
//     return () => {
//       mediaQueryList.removeEventListener("change", handler);
//     };
//   }, [query]);
  
//   return matches;
// };

// export const breakpoints = {
//   mobile: "(max-width: 767px)",
//   tablet: "(min-width: 768px) and (max-width: 1023px)",
//   desktop: "(min-width: 1024px)",
//   largeDesktop: "(min-width: 1280px)",
// };

// export default useMediaQuery;



import { useState, useEffect } from "react"

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const mediaQueryList = window.matchMedia(query)
    setMatches(mediaQueryList.matches)

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQueryList.addEventListener("change", handler)

    return () => {
      mediaQueryList.removeEventListener("change", handler)
    }
  }, [query])

  return matches
}

export const breakpoints = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
  largeDesktop: "(min-width: 1280px)",
}

export default useMediaQuery