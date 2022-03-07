import Link from 'next/link'
import {useRouter} from 'next/router'
function Home(){
    const router=useRouter();
    const handleClick=()=>{
        console.log('you clicked');
        router.push('/product');
    }
    return( 
    <div>
    <Link href="/product/1">
    <a>Product 1</a>
    </Link>
    <Link href="/blog">
        <a>Blog</a>
    </Link>
    <button onClick={handleClick}>Click me!</button>
    
    </div>)
}
export default Home