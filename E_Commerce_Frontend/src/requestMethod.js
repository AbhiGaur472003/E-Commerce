import axios from "axios";

const BASE_URL="http://localhost:5000/api/";

const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTVkNzA3OTRmOWE4M2IxMTI4OTBjMiIsImlkQWRtaW4iOnRydWUsImlhdCI6MTY3NDUzNjUxOSwiZXhwIjoxNjc0Nzk1NzE5fQ.IDbgjb7XT3Ntm2H1bhsENRpWNpkKaCG20ANhrDIxOdA";
export const publicRequest=axios.create({
    baseURL:BASE_URL,
}); 
export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
}); 