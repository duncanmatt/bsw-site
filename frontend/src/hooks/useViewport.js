import {useState, useEffect} from 'react'

function useViewport() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize)
  }, []);
  return {width}
}

export default useViewport
