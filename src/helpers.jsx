/**
 * Gets the true link
 *
 * @param String link the link you want to check
 * @return String formatted true link
 */
export function get_true_link(link) {
  const home_url = "/";

  const check_http = link.substr(0, 4);
  const check_mail = link.substr(0, 7);
  const check_slash = link.substr(0, 1);

  if (
    link &&
    link !== "" &&
    check_slash !== "#" &&
    link !== "javascript:;" &&
    check_http !== "tel:" &&
    check_mail !== "mailto:"
  ) {
    if (check_http === "http") {
      link += '" target="_blank';
    } else {
      if (check_slash !== "/") {
        link = "/" + link;
      }

      link = home_url + link;
    }
  }

  return link;
}
