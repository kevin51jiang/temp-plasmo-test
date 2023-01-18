import type { PlasmoContentScript, PlasmoCSUIProps, PlasmoGetInlineAnchor, PlasmoGetInlineAnchorList } from "plasmo"

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () =>
  document.querySelectorAll(`div`)


export const config: PlasmoContentScript = {
  matches: ["<all_urls>","http://*/*", "https://*/*"],
}

// export const getInlineAnchor: PlasmoGetInlineAnchor = () => document.querySelector(`div[contenteditable="true"]`)


// Use this to optimize unmount lookups
export const getShadowHostId = () => "plasmo-inline-example-unique-id"

const PageContent = () => {
  console.log("In pagecontent")
  return <button>Engage</button>
}

console.log("From page content")

export default PageContent
