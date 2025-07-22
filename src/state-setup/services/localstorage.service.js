const localStorageService = {
  get(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // handle error
    }
  },
  delete(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      // handle error
    }
  },
};

export default localStorageService;
