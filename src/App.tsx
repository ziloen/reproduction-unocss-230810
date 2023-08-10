import { PropsWithChildren, useState } from 'react'

function AnyCompnentOrTag(props: PropsWithChildren) {
  return <div className='text-amber-8 p-10'></div>
}

function App() {
  const [open, setOpen] = useState(false)

  return (
    <AnyCompnentOrTag
      
   // ^ ctrl + space here
    >
      <div
        
     // ^ ctrl + space here
        className=''
        
     // ^ ctrl + space here, no autocomplete, this is fine
      >
        <div
          style={{}}
          
       // ^ ctrl + space here
        >
        </div>
      </div>
    </AnyCompnentOrTag>
  )
}

export default App
