import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';

export default class {

    constructor() {
        this.notes = [];
    }

    setNotes(notes) {
        this.notes = notes;
    }

    render() {
        return h('div.container');
    }

    draw(newTree) {
        window.requestAnimationFrame(() => {
            let patches = diff(this.tree, newTree);
            this.rootNode = patch(this.rootNode, patches);
            this.tree = newTree;
        });
    }
}