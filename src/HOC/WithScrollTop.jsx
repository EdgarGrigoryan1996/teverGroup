import React, {useEffect} from 'react';

function WithScrollTop({Child}) {
    const url = window.location.pathname.split('/').pop()
    useEffect(() => {
        console.log(url)
        window.scrollTo({top: 0, left: 0});
    },[url])
    return <Child />
}

export default WithScrollTop;