'use strict'

const App = {

  initState() {
    // this method is used to load persisted state data into pstate
    initState();
    // initiate state for your components here
    // state.componentname = {}
  },

  // the render function is called to rebuild the app and apply changes 
  // to the DOM everytime setState is called.
  // Note: Do not call setState inside another setState
  render() {
    return (
      Div({},[
        // nav.routedComponent() calls the currently routed component to 
        // render its content
        nav.routedComponent()
      ])
    );
  }

}
