export const formatView = (viewCount) => {
  if (viewCount < 1000) {
    return viewCount;
  }
  let result;

  if (viewCount < 1000000) {
    const thousand = viewCount / 1000;
    result = thousand.toLocaleString('en-GB', {
      maximumFractionDigits: 1,
    });
    return `${result}K`;
  }

  if (viewCount < 1000000000) {
    const million = viewCount / 1000000;
    result = million.toLocaleString('en-GB', {
      maximumFractionDigits: 1,
    });
    return `${result}M`;
  }

  const billion = viewCount / 1000000000;
  result = billion.toLocaleString('en-GB', {
    maximumFractionDigits: 1,
  });
  return `${result}B`;
};
