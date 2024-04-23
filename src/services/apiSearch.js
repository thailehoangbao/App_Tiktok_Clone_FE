import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const response = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return response.data;
    } catch (error) {
        alert('Error: ' + error.message);
    }
};
// request
//     .get(`users/search`, {
//         params: {
//             q: valueDebounce,
//             type: 'less',
//         },
//     })
//     .then((response) => {
//         console.log(response);
//         setAccount(response.data);
//         setLoading(false);
//     })
//     .catch((err) => {
//         setAccount(false);
//     });
