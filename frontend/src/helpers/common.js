const API_BASE_URL = "http://localhost:8000/api";

const SummaryApi = {
    signUP: {
        url: `${API_BASE_URL}/signup`,
        method: "POST"
    },
    login: {
        url: `${API_BASE_URL}/login`,
        method: "POST"
    },
    forgotPassword: {
        url: `${API_BASE_URL}/forgot-password`,
        method: "POST"
    },
    products: {
        url: `${API_BASE_URL}/products`,
        method: "GET"
    },
    addToCart: {
        url: `${API_BASE_URL}/cart/add`,
        method: "POST"
    },
    getCart: {
        url: `${API_BASE_URL}/cart`,
        method: "GET"
    }
};

export default SummaryApi;