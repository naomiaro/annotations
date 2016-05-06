import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';

export default class {

    constructor() {
        this.notes = [];
    }

    /*
    {
       "begin": "43.640",
       "end": "48.120",
       "id": "f000014",
       "language": "en",
       "lines": [
        "Pity the world, or else this glutton be,"
       ]
    }
    */
    setNotes(notes) {
        this.notes = notes;
    }

    render() {
        return h('div.container', this.notes.map(function(note) {
            return h('div.row', [
                h('col-xs-1.col-sm-1.col-md-1.col-lg-1', [
                    h('div.box', note.id)
                ]),
                h('col-xs-9.col-sm-9.col-md-9.col-lg-9', [
                    h('div.box', note.lines)
                ]),
                h('col-xs-2.col-sm-2.col-md-2.col-lg-2', [
                    h('div.box', note.begin)
                ])
            ]);
        }));
    }

    draw(newTree) {
        window.requestAnimationFrame(() => {
            let patches = diff(this.tree, newTree);
            this.rootNode = patch(this.rootNode, patches);
            this.tree = newTree;
        });
    }
}