let state = {};

let pstate = {};

let _stateIsBusy = false;

const initState = () => {
  pstate = JSON.parse(localStorage.getItem(window.location.origin) ?? "{}")
}

const setState = (f) => {
  if (_stateIsBusy == true) {
    console.log('State is busy...')
    return;
  }
  _stateIsBusy = true;
  let virtualApp = vApp;
  f();
  // update persisted state
  localStorage.setItem(window.location.origin, JSON.stringify(pstate));
  let newVirtualApp = builder();
  // console.log(virtualApp, newVirtualApp);
  if (virtualApp == undefined) window.location.reload();
  // get the difference in both app nodes
  let patch = diff(virtualApp, newVirtualApp);
  // newVirtualApp = spoofCond(newVirtualApp);
  // update the node with the patch
  rootElem = patch(rootElem);
  vApp = newVirtualApp;
  // free state
  _stateIsBusy = false;
}

const deleteState = () => {
  state = {};
  pstate = {};
  localStorage.setItem(window.location.origin, "{}");
}

// extracted from umd
if (typeof module === 'object' && module.exports) {
  // Node. Does not work with strict CommonJS, but
  // only CommonJS-like environments that support module.exports,
  // like Node.
  module.exports = {
    state, pstate, initState, setState, deleteState
  };
}
