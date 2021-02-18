
const $alert = (content, context = 'success', icon = null) => {
  return Div(
    {class:`alert alert-${context} alert-dismissible fade show`, role:"alert"},[
      Div({class:'d-flex justify-content-start'},[
        Strong({},[icon != null ? Span({class:`fa fa-${icon}`}) : Span()]),
        Span({},[content]),
        Button({type:"button", class:"btn-close", 'data-bs-dismiss':"alert", 'aria-label':"Close"})
      ])
    ]
  )
}
