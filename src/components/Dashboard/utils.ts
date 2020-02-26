export const createInputControlProps = (state, setState) => (name) => {
  return {
    onChange: e => setState({ ...state, [name]: e.target.value }),
    value: state[name]
  }
}