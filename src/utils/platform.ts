import platform from 'platform';

export const isIOS = () => {
  return platform.os?.family === 'iOS';
}