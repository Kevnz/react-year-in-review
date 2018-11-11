const Green = () => (
  <div className="green">
     <AppContext.Consumer>
        {(context) => context.number}
      </AppContext.Consumer>
  </div>
)
const Blue = () => (
  <div className="blue">
    <AppContext.Consumer>
        {(context) => <button onClick={context.inc}>INC</button>}
      </AppContext.Consumer>
    <Green />
  </div>
)