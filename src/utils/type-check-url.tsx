/*type check url, copy from backend*/
export type detectTypeReturn = null | string;
export default (url: string): detectTypeReturn => {
  // youtube-dl
  const regexYoutube = /^(?:https?:\/\/)?(?:www\.)?(youtube).com\/watch\?v=.+$/;
  const regexFacebook = /^(?:https?:\/\/)?(?:www\.)?(facebook).com\/.+\/videos\/.+$/;
  const regexSoundcloud = /^(?:https?:\/\/)?(?:www\.)?(soundcloud).com\/.+?\/.+$/;
  const regexInstagram = /^(?:https?:\/\/)?(?:www\.)?(instagram).com\/p\/.+$/;
  // manual site
  /*https://zingmp3.vn/bai-hat/Anh-Nen-Yeu-Co-Ay-N-Ly/ZWAE8CBB.html
  https://zingmp3.vn/video-clip/Song-Gio-Jack-K-ICM/ZWAEIUUB.html*/
  const regexZingmp3 = /^(?:https?:\/\/)?(zingmp3)\.vn\/(bai-hat|video-clip)\/.+$/;
  const regex = [
    regexYoutube,
    regexFacebook,
    regexSoundcloud,
    regexInstagram,
    regexZingmp3,
  ];
  // return type on match, null on mismatch
  try {
    let result: any[] | null = null;
    for (let i = 0; i < regex.length; i++) {
      const temp = regex[i].exec(url);
      if (temp) {
        result = temp;
        // break when has result
        break;
      }
    }
    return result !== null ? result[1] : null;
  } catch (err) {
    logger.error(err);
    return null;
  }
};
