export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

export type ResponseType<D = {}> = {
  resultCode: ResultCodesEnum;
  messages: Array<string>;
  data: D;
};

export type WithCaptchaResponseType<D = {}> = {
  resultCode: ResultCodesEnum | ResultCodeForCaptcha;
  messages: Array<string>;
  data: D;
};
