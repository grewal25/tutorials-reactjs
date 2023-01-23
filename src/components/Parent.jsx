import Child1 from './Child1';

function Parent(props){
    return <>
    <Child1 {...props}
    />
    </>
}

export default Parent;