import isMobile from 'ismobilejs';

export const checkBrowserForWebShare = () => {
  const isFirefoxForAndroid = /Android.*Firefor/.test(navigator.userAgent);

  const isAndroidWebView = /wv|WebView/.test(navigator.userAgent);

  const checkMobile = isMobile().phone;
  const checkTablet = isMobile().tablet;
  return !(isFirefoxForAndroid || isAndroidWebView || !(checkMobile || checkTablet));
};
