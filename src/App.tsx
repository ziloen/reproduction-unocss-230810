


function AnyComponent({ text }: {
  text?: string,
  disabled?: boolean,
}) {
  return (
    <div>
      <div>{text}</div>
      <p className="text-amber-8">Content</p>
    </div>
  )
}

function App() {
  return (
    <div >
      <AnyComponent />
    </div>
  )
}

export default App
