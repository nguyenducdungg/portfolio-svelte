export function teleport(node: HTMLElement, name: string) {
    node.style.display = 'block'
    const teleportContainer = document.getElementById(name) as HTMLElement;
    teleportContainer.appendChild(node);

    return {
        destroy() {
            node.remove();
        }
    }
}
