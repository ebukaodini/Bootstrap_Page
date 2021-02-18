let builder = () => {};
let rootElem;
let vApp;

const mount = (App) => {
  // setting the target element
  let tempElem = document.createElement('div');
  tempElem.setAttribute('id', 'root');
  $('app')[0].appendChild(tempElem);
  $target = $('#root')[0];

  builder = App;
  vApp = App();
  // spoofCond(vApp);
  rootElem = render(vApp);
  $target.replaceWith(rootElem);
  return rootElem;
};

const spoofCond = (node) => {
  
  if (typeof node == 'object') {
    node.children.forEach((child,i) => {
      if (child.tagName == 'cond') {
        if (child.attrs.condition == 'true') {
          node.children[i] = child.children;
        }
        if (child.attrs.condition == 'false') {
          node.children[i] = ''
        }
      } else {
        return spoofCond(child)
      }
    });
  }
  
  return node;
}

const spoofElemCondAndLoop = (element, children) => {

  //#region 
  // // check for loops
  // $('loop', rootElem).forEach((element) => {

  //   // loop from start to end
  //   if (element.hasAttribute('start') && element.hasAttribute('end')) {
      // let start = Number.parseInt(element.getAttribute('start'));
      // let end = Number.parseInt(element.getAttribute('end'));
  //     // get the loop content
      // let loopContent = element.innerHTML;
  //     // replace the dummy listeners in the loop content with their actual js equivalent
  //     // replace the item placeholder with the required index
      // loopContent = loopContent.toString().replace(/{{/mgi, '${').replace(/}}/mgi, '}');
      // let decideCond = end >= start;

  //     // console.log(loopContent);

  //     // replace content with rendered contents
      // let newElements = '';
      // for (let index = start; index != (decideCond ? end + 1 : end - 1); decideCond ? index++ : index--) {
      //   let render = loopContent;
      //   eval(`render = \`${loopContent}\`;`);
      //   newElements += render;
      // }
      // element.insertAdjacentHTML('beforebegin', newElements);
      // element.parentNode.removeChild(element);
  //   }

  //   // loop through a list/map
  //   if (element.hasAttribute('list')) {
  //     let list = JSON.parse(element.getAttribute('list'));
  //     let item = element.hasAttribute('item') ? element.getAttribute('item') : 'index';
  //     // get the loop content
  //     let loopContent = element.innerHTML;
  //     // replace the dummy listeners in the loop content with their actual js equivalent
  //     // replace the item placeholder with the required item
  //     loopContent =
  //       loopContent.toString()
  //         .replace(/{{/mgi, '${')
  //         .replace(/}}/mgi, '}')
  //         .replace(/&gt;/mgi, '>')
  //         .replace(/&lt;/mgi, '<')
  //         .replace(new RegExp(item, 'mgi'), 'item');

  //     // console.log(loopContent);

  //     // replace content with rendered contents
  //     let newElements = '';
  //     for (const index in list) {
  //       if (Object.hasOwnProperty.call(list, index)) {
  //         let item = list[index];
  //         let render = loopContent;
  //         eval(`render = \`${loopContent}\`;`);
  //         newElements += render;
  //       }
  //     }

  //     element.insertAdjacentHTML('beforebegin', newElements);
  //     element.parentNode.removeChild(element);
  //   }
  
  // });
  //#endregion
  
  // console.log(children);
  if (element.tagName == 'COND') {
    var condition = element.getAttribute('condition') == 'true' ? true : false;
    
    if (condition == false) {
      children = [];
    } else {
      children = children;
    }
  }

  if (element.tagName == 'LOOP') {

    if (element.hasAttribute('start') && element.hasAttribute('end')) {
      let start = Number.parseInt(element.getAttribute('start'));
      let end = Number.parseInt(element.getAttribute('end'));

      // let loopContent = element.innerHTML;
      // loopContent = loopContent.toString().replace(/{{/mgi, '${').replace(/}}/mgi, '}');
      let decideCond = end >= start;

      let childrenList = []; let oChildren = children; nChildrenList = []; i = 0;
      for (let index = start; index != (decideCond ? end + 1 : end - 1); decideCond ? index++ : index--) {

        console.log('looping', ...children)
        
        children.forEach((child, i) => {
          // console.log(child.attrs);
          children[i].attrs = spoofLoopAttr(children[i].attrs, null, index);
        });

        childrenList.push(...children);
        // childrenList[i] = [...children];

        // spoofLoopAttr(childrenList[i],)
        i++;
      }

      // childrenList.forEach((child, i) => {
      //   console.log(child.attrs);
      //   childrenList[i].attrs = spoofLoopAttr()
      // });

      // console.log(childrenList)
      // element.insertAdjacentHTML('beforebegin', newElements);
      // element.parentNode.removeChild(element);
      children = childrenList;

    }
  
  }
  
  return children;

};

spoofLoopAttr = (attrs, item, index) => {
  content = JSON.stringify(attrs).replace(/{{/mgi, '${').replace(/}}/mgi, '}');

  let rendered = ''
  eval(`rendered = \`${content}\`;`);

  // console.log(JSON.parse(rendered));
  attrs = JSON.parse(rendered);

  return attrs;
}

const spoofOld = (rootElem) => {

  // check for loops
  $('loop', rootElem).forEach((element) => {

    // loop from start to end
    if (element.hasAttribute('start') && element.hasAttribute('end')) {
      let start = Number.parseInt(element.getAttribute('start'));
      let end = Number.parseInt(element.getAttribute('end'));
      // get the loop content
      let loopContent = element.innerHTML;
      // replace the dummy listeners in the loop content with their actual js equivalent
      // replace the item placeholder with the required index
      loopContent = loopContent.toString().replace(/{{/mgi, '${').replace(/}}/mgi, '}');
      let decideCond = end >= start;

      // console.log(loopContent);

      // replace content with rendered contents
      let newElements = '';
      for (let index = start; index != (decideCond ? end + 1 : end - 1); decideCond ? index++ : index--) {
        let render = loopContent;
        eval(`render = \`${loopContent}\`;`);
        newElements += render;
      }
      element.insertAdjacentHTML('beforebegin', newElements);
      element.parentNode.removeChild(element);
    }

    // loop through a list/map
    if (element.hasAttribute('list')) {
      let list = JSON.parse(element.getAttribute('list'));
      let item = element.hasAttribute('item') ? element.getAttribute('item') : 'index';
      // get the loop content
      let loopContent = element.innerHTML;
      // replace the dummy listeners in the loop content with their actual js equivalent
      // replace the item placeholder with the required item
      loopContent =
        loopContent.toString()
          .replace(/{{/mgi, '${')
          .replace(/}}/mgi, '}')
          .replace(/&gt;/mgi, '>')
          .replace(/&lt;/mgi, '<')
          .replace(new RegExp(item, 'mgi'), 'item');

      // console.log(loopContent);

      // replace content with rendered contents
      let newElements = '';
      for (const index in list) {
        if (Object.hasOwnProperty.call(list, index)) {
          let item = list[index];
          let render = loopContent;
          eval(`render = \`${loopContent}\`;`);
          newElements += render;
        }
      }

      element.insertAdjacentHTML('beforebegin', newElements);
      element.parentNode.removeChild(element);
    }

  });

  // check for conditions
  $('cond', rootElem).forEach((element) => {

    // single conditioning
    if (element.hasAttribute('condition')) {
      let condition = element.getAttribute('condition') == 'true' ? true : false;
      // get the loop content
      let condContent = element.innerHTML;

      if (condition == false) {
        element.insertAdjacentHTML('beforebegin', '');
        element.parentNode.removeChild(element);
      } else {
        element.insertAdjacentHTML('beforebegin', condContent);
        element.parentNode.removeChild(element);
      }
    }

  });

  return rootElem;

}

const spoofElemRouting = (element) => {
  if (element.tagName == 'ROUTE') {
    var route = element.getAttribute('to');
    var action = element.getAttribute('on') ?? 'click';
    element.addEventListener(action, () => nav.route(route));
  };

  if (element.tagName == 'ROUTEBACK') {
    var action = element.getAttribute('on') ?? 'click';
    // element.removeEventListener(action, () => nav.back(), {once : true});
    element.addEventListener(action, () => nav.back());
  };

  if (element.tagName == 'ROUTEFORWARD') {
    var action = element.getAttribute('on') ?? 'click';
    element.addEventListener(action, () => nav.forward());
  };

  if (element.tagName == 'REDIRECT') {
    var route = element.getAttribute('to');
    nav.route(route);
  };

  return element;

}

const renderElem = ({tagName, attrs, children}) => {
  // console.log('called renderElem',{tagName, attrs, children})
  // create the element
  //   e.g. <div></div>
  let $el = document.createElement(tagName);

  // add all attributs as specified in vNode.attrs
  //   e.g. <div id="app"></div>
  for (const [k, v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  }

  // spoof element for routes
  if (tagName == 'route' || tagName == 'routeBack' || tagName == 'routeForward' || tagName == 'redirect') {
    $el = spoofElemRouting($el);
  }

  // spoof element for cond
  if (tagName == 'cond' || tagName == 'loop') {
    children = spoofElemCondAndLoop($el, children);
  }

  // append all children as specified in vNode.children
  //   e.g. <div id="app"><img></div>
  for (const child of children) {
    $el.appendChild(render(child));
  }

  return $el;
};

const render = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  // we assume everything else to be a virtual element
  return renderElem(vNode);
};

const zip = (xs, ys) => {
  const zipped = [];
  for (let i = 0; i < Math.min(xs.length, ys.length); i++) {
    zipped.push([xs[i], ys[i]]);
  }
  return zipped;
};

const diffAttrs = (oldAttrs, newAttrs) => {
  const patches = [];

  // setting newAttrs
  for (const [k, v] of Object.entries(newAttrs)) {
    patches.push($node => {
      $node.setAttribute(k, v);
      return $node;
    });
  }

  // removing attrs
  for (const k in oldAttrs) {
    if (!(k in newAttrs)) {
      patches.push($node => {
        $node.removeAttribute(k);
        return $node;
      });
    }
  }

  return $node => {
    for (const patch of patches) {
      patch($node);
    }
    return $node;
  };
};

const diffChildren = (oldVChildren, newVChildren) => {

  const childPatches = [];
  oldVChildren.forEach((oldVChild, i) => {
    childPatches.push(diff(oldVChild, newVChildren[i]));
  });

  const additionalPatches = [];
  for (const additionalVChild of newVChildren.slice(oldVChildren.length)) {
    additionalPatches.push($node => {
      $node.appendChild(render(additionalVChild));
      return $node;
    });
  }

  return $parent => {
    // since childPatches are expecting the $child, not $parent,
    // we cannot just loop through them and call patch($parent)
    // console.log($parent)
    for (const [patch, $child] of zip(childPatches, $parent.childNodes)) {
      patch($child);
    }

    for (const patch of additionalPatches) {
      patch($parent);
    }
    return $parent;
  };
};

const diff = (oldVTree, newVTree) => {
  // TODO: this throws error
  // Uncaught TypeError: Cannot read property 'remove' of undefined
  // let's assume oldVTree is not undefined!
  if (newVTree === undefined) {
    return $node => {
      $node.remove();
      // the patch should return the new root node.
      // since there is none in this case,
      // we will just return undefined.
      return undefined;
    }
  }

  if (typeof oldVTree === 'string' ||
    typeof newVTree === 'string') {
    if (oldVTree !== newVTree) {
      // could be 2 cases:
      // 1. both trees are string and they have different values
      // 2. one of the trees is text node and
      //    the other one is elem node
      // Either case, we will just render(newVTree)!
      return $node => {
         const $newNode = render(newVTree);
         $node.replaceWith($newNode);
         return $newNode;
       };
    } else {
      // this means that both trees are string
      // and they have the same values
      return $node => $node;
    }
  }

  if (oldVTree.tagName !== newVTree.tagName) {
    // we assume that they are totally different and 
    // will not attempt to find the differences.
    // simply render the newVTree and mount it.
    return $node => {
      const $newNode = render(newVTree);
      $node.replaceWith($newNode);
      return $newNode;
    };
  }

  const patchAttrs = diffAttrs(oldVTree.attrs, newVTree.attrs);
  // if (newVTree.tagName == 'cond' || newVTree.tagName == 'loop') {
  //   newVTree.children = spoofElemCondAndLoop(newVTree, newVTree.children);
  //   console.log('old Tree',oldVTree)
  //   console.log('new Tree',newVTree)
  // }
  const patchChildren = diffChildren(oldVTree.children, newVTree.children);
  // console.log('check diff on children')
  // console.log(oldVTree.children, newVTree.children)

  return $node => {
    patchAttrs($node);
    // console.log($node)
    patchChildren($node);
    return $node;
  };
};
