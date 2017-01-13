import createElement from 'virtual-dom/create-element';
import EventEmitter from 'event-emitter';

import TimedAnnotationList from './TimedAnnotationList';

export function init(options={}, ee=EventEmitter()) {
    if (options.container === undefined) {
        throw new Error("DOM element container must be given.");
    }

    let annotationList = new TimedAnnotationList();
    annotationList.setEventEmitter(ee);


    //take care of initial virtual dom rendering.
    let tree = annotationList.render();
    let rootNode = createElement(tree);

    options.container.appendChild(rootNode);
    annotationList.tree = tree;
    annotationList.rootNode = rootNode;

    return annotationList;
}