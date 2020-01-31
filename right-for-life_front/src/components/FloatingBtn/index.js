/** Quick start:
 * <BackBtn/><ShareBtn/>
 *
 * Usage:
 *
 * back button:
 * <BackBtn />
 * props:
 * position="[absolute position in TailwindCSS; if unset 'left-0 ml-2 mt-2' used]"
 *
 * share button:
 * <ShareBtn />
 * props:
 * position="[absolute position in TailwindCSS; if unset 'right-0 mr-2 mt-2' used]"
 * shareUrl="[url to share; if unset current url used]"
 *
 * base:
 * <FloatingBtn />
 * props:
 * icon="[icon code from font awesome; e.g. fa-share-alt]"
 * position="[absolute position in TailwindCSS; if unset 'left-0 ml-2 mt-2' used]"
 * url="[url to component; e.g. /animals]"
 * onClick={[function]} if set onClick ignored
 * content=[node, e.g. <div>123</div>,]
 * */

export { FloatingBtn } from "./FloatingBtn.jsx";
export { BackBtn } from "./BackBtn.jsx";
export { ShareBtn } from "./ShareBtn.jsx";
