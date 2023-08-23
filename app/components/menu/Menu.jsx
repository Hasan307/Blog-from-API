import Link from 'next/link';
import './menue.css'
export default function menu() {
    return (
      <div>
          <ul class="snip1175">
            <li><Link href="/" data-hover="Home">Home</Link></li>
            <li><Link href="../../blogs" data-hover="Blog">Blog</Link></li>
            <li><Link href="../../about" data-hover="About Us">About Us</Link></li>
           
            <li><Link href="../../contact" data-hover="Contact">Contact</Link></li>
           
          </ul>
      </div>
    )
  }
  