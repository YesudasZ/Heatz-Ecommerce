/**
 * Formats a price number as a currency string
 * 
 * @param price - The price to format
 * @param currencyCode - The currency code (default: 'USD')
 * @returns Formatted price string
 */
export const formatPrice = (price: number, currencyCode = 'USD'): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
  };
  
  /**
   * Truncates a string to a specified length
   * 
   * @param str - The string to truncate
   * @param maxLength - Maximum length before truncation
   * @returns Truncated string with ellipsis if needed
   */
  export const truncateString = (str: string, maxLength: number): string => {
    if (str.length <= maxLength) return str;
    return `${str.slice(0, maxLength - 3)}...`;
  };
  
  /**
   * Calculates the discount percentage between original and current price
   * 
   * @param originalPrice - The original price
   * @param currentPrice - The current (discounted) price
   * @returns Discount percentage as a whole number
   */
  export const calculateDiscount = (originalPrice: number, currentPrice: number): number => {
    if (originalPrice <= currentPrice) return 0;
    const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
    return Math.round(discount);
  };
  
  /**
   * Generates an array of product color options
   * 
   * @param colors - Array of color names
   * @returns Array of color objects with name and CSS class
   */
  export const generateColorOptions = (colors: string[]) => {
    const colorMap: Record<string, string> = {
      black: 'bg-black',
      white: 'bg-white border border-gray-300',
      red: 'bg-red-500',
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      yellow: 'bg-yellow-400',
      purple: 'bg-purple-500',
      gray: 'bg-gray-500',
    };
  
    return colors.map(color => ({
      name: color,
      class: colorMap[color.toLowerCase()] || 'bg-gray-200',
    }));
  };