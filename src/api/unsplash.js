import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID MVQ8m5xYzk6LsCZ-poCeWxSo9RdiMYZnL16nm9bDFvg",
  },
});
