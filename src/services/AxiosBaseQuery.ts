import axiosInstance from './AxiosInterceptors';

export const axiosBaseQuery =
  ({baseUrl}: {baseUrl: string}) =>
  async ({url, method, data, params}: any) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
      });

      return {data: result.data};
    } catch (axiosError) {
      let err = axiosError as any;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
