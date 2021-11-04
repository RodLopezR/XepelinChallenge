const State = {
  popular: {
    loading: true,
    error: false,
    data: { page: 0, results: [], total_pages: 0, total_results: 0 },
  },
  topRated: {
    loading: true,
    error: false,
    data: { page: 0, results: [], total_pages: 0, total_results: 0 },
  },
  upcoming: {
    loading: true,
    error: false,
    data: { page: 0, results: [], total_pages: 0, total_results: 0 },
  },
};

export default State;
