import Cookies from "js-cookie";

function storeCookie(key, value) {
  Cookies.set(key, value);
}

function getCookie(key) {
  return Cookies.get(key);
}

function removeCookie(key) {
  Cookies.remove(key);
}

export { storeCookie, getCookie, removeCookie };
