import {resizeObserver} from "../../store/scroll";
import { get} from "svelte/store";


export function resizeEvent(node: HTMLElement) {
  get(resizeObserver).observe(node)

  return {
    destroy() {
      get(resizeObserver).unobserve(node)
    }
  };
}
