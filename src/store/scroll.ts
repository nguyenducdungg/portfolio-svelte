import {derived, readable, writable} from "svelte/store";
import type {Scrollbar} from "smooth-scrollbar/interfaces";
import { browser } from '$app/environment';

export const limit = writable(0)
export const xScroll = writable(0)
export const winWidth = writable(0)
export const winHeight = writable(0)
export const scroll = writable({} as Scrollbar)
export const resizeObserver = readable({} as ResizeObserver,(set) =>{
  if (browser){
    set( new ResizeObserver(() =>{
      document.dispatchEvent(new CustomEvent('elementResize'))
    }))
  }
})

export const test = writable(0)

export const progress = derived(
  [limit, xScroll],
  ([$limit, $xScroll]) => $xScroll / $limit
)
