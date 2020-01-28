/** Usage:
 * Set parent container position relative
 *
 * back button:
 * <BackBtn />
 * props:
 * position="[absolute position in TailwindCSS; default: if unset left-0 used]"
 *
 * share button:
 * <ShareBtn />
 * props:
 * position="[absolute position in TailwindCSS; default: if unset left-0 used]"
 * shareUrl="[url to share; if unset current url used]"
 *
 * base:
 * <FloatingBtn />
 * props:
 * icon="[icon from font awesome; e.g. fa-share-alt]" !required
 * position="[absolute position in TailwindCSS; default: if unset left-0 used]"
 * onClick={[function]} !required or onClick or url
 * or url="[url to component; e.g. /animals]"
 * */

export { FloatingBtn } from "./FloatingBtn.jsx";
export { BackBtn } from "./BackBtn.jsx";
export { ShareBtn } from "./ShareBtn.jsx";
