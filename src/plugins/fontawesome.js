import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default Vue;
