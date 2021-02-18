'use strict'

const MyApp = () => {

  // variables can be initiated here
  
  // Note: because variables initiated here are re-initiated whenever the component 
  // re-renders, it is advisable to get check if it has a value before initiating a 
  // value for it.
  // Note: to restrict a variable to a component, use this. to declare it making it 
  // a property of this component
  this.count ??= 0;
  
  // Note: variables that are used accross components are held in state as state 
  // properties
  // state.auth ??= false;

  // functions declared ina component are scoped to that component and must 
  // be placed before the return statement if it is to be used in the return 
  // section
  this.increment = () => {
    setState(() => {
      this.count++;
    })
  }

  // Note: Returning Contents
  // return the content of this component in an element or as an array of 
  // elements to replace the children of the parent element.
  return (
    Div({class:'vh-100 vw-100 d-flex flex-column justify-content-center align-items-center text-dark'}, [
      H1({},['MyApp']),
      P({class:'lead'},['Click the floating button to increment counter']),
      H2({class:''},[
        `${this.count}`
      ]),
      Button({class:'btn btn-lg btn-primary rounded-circle shadow m-5', onclick:'increment();'},[
        '+'
      ])
    ])
  );
}