import Link from 'next/prefetch'

export default ({ images }) => (
  <div>
        <div className="item">
          <div className="story">
           <a>{images}</a>
          </div>
        </div>
  </div>
)
