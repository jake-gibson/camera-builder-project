
const debug = {
  log: (msg) => {
    if(process.env.NODE_ENV !== 'production') console.log(msg)
  }
}



export default debug