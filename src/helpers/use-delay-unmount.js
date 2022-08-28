import { useState, useEffect } from "react";

const useDelayUnmount = (delayTime) => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(
      () => setShowComponent(delayTime ? false : true),
      delayTime
    );

    return () => clearTimeout(timeout);
  }, [delayTime, showComponent]);

  return showComponent;
};

export default useDelayUnmount;
