const Counterreducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
     
      default:
        throw new Error()
    }
  }

export default Counterreducer;
  // actiion like incremt kar hia or bhot srae switch case bana sakta hon
