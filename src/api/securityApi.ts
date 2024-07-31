import { instance } from "./instance";

type GetCaptchaUrlResponse = { url: string };

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<GetCaptchaUrlResponse>('security/get-captcha-url');
  },
};