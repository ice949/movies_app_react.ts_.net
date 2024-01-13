import React from 'react';
import "./Movie.css";

interface Props {
  movie: object;
}

const Movie: React.FC = ({movie}: Props): JSX.Element => {
  return (
    <div className='Movie'>
        {/* <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EADYQAAICAgADBQQJBAMBAAAAAAECAAMEERIhMQUiQVFhEzJxwQYUI0KBkbHh8DNiodFSovGC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADQRAAIBAwIDBQcDBAMAAAAAAAABAgMEERIhMUFRBRMiYXEUMoGRscHwUqHRI0Lh8SRicv/aAAwDAQACEQMRAD8A/DoAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAdV8PEOLet8/hAXEmzKRRkMgO16r6gwdlx2K8HBAEAQD0Ak8oBLmVrVdwJ90ANz8fGAQwBAEAQBAEAQBAEAQBALfZiqctDZrgTbNvyAnHwLKeNWZcDrJAsXRPeQ8Kj0nSD4nteAGoWx3ClzqtfMDqfhOZyyTjiKb5l7G7Kxz/ULEzpxI6yey8ZEBHEIONYKC4Aaword4j7MH7x8pxnYR1PBFSort4uhXmPjOkTrMVfYU2LzbmHPr1H6wd5FM9YOCAIAgCAIAgCAIAgCATY/F3gvVhw/nANWvC4cG66z+oWCr+IB+cg5Ynp8smtW2bfveerT81kZZ4cx1+7UFrX0AH7zlJ5imdv4qFxKmuEdvkT13cKAiWGM9utLAE9IO5KFrnmRyI5gjzg4XcjFW9sptd41rauvMjnKVPET0J2/eVJv/rq/ZGRkLZWHrYclb9pcee9tirAEAQBAEAQBAEAQBAEA+g+i+Kl2mfXfsKjf9qlv9TPXnhYPW7NtY1WpPrj5Jt/Ymucv2bcqgFqytmvUcj/grJyX9RPqV0ZP2SpTXGLUvls/2x8irnjWZY3haq2KfMEftFH3MEe04/8AJc1/clL4Mr+00plp5557RmGiYB5wtZ9mg7zEKB8ZzJKMHN6VxZro4GTl2AfZqVpX10P2lEY5UV6s9mrNQlXa4bQXw2f0Oc7GR+yUt5e0ZHY//JElGpmbiUVbeKtYVHxefqfMnrLjyzyAIAgCAIAgCAIAgCAfRdkMaMLFbet2sRr4EfKUTjqk15HsWtZ0aEJRe+rK+T2+f1FuVXh5hcndTEhl81P/AKfyEm45jgyUblQuHUfuvOV5Piju6kJUlF9g4OZxMoc0ZT91j4SqLalqXxR6NSjCdJUKstl7k+WP0v8ANmZ+Tj20OVsQqdct+PqD4iaIyUllHj17epbz0VFh/UirRn0EBJPQDnuG0t2VwhKpLTFZZpY9LY9nCi+1ztdyteYr9WPnM85d5s9o/U9q3t3avw+KtyX6fOXLJDZZWjV4dFi2ezPeffddz1Pw/wBGWwy/EYbqcYqNCG6ju31k+fouBfdlsAx05qKCi7/DfzMioaXlE+/c4KEv7Y4R8oZcecIAgCAIAgCAIAgCAewDd7NsD0Y1JHQM3/b9pXJaU5G6hU1unSa4fc67WxXp7z1br/5qNqfXfhOQqRl6kr2xqW71JZi+a4EfZ1+RjoyVBL8d98WPZzVvh5GSlDV69Sq2vJ0fDxi+KfB/waVNaW4NgRmbEeu1kpvG2x7E1yB8ucobalvxPVjGNSg9LzBp7PjFro+hx2bj8WBY1dgpZ7itlqptgipxECSrNa8NZKuz4N27cHpbby+eEslG7LZsb2OJV9Wxj157st9WP+pONPfVJ5ZjrXvg7ugtMefV+bZXwKDbaAlbMAeZUfOTlOMd2yiha1biWKccmhaxxcmknhJJ4W10HmB/PORg9SyX3dL2aoqec4W/qfNSwwCAIAgCAIAgCAIAgCAaXY1mslQx11Ck+cjLdYL7eWirGRpYlQrapzl5CM+wSGGuMe8uiOXmPMSqXutY3PQpxcJx/qNKXF+fNdPQsZeNXRU+TU1fGOZ1ocf4dN+o1KqVaTlpaN3aPZlGFF1ozWV8M/Dh8sHOPl1ew+r4y238SWNbcQEVXcAa5+A1LHBt6mZKNeEaapU/Fs8vgsvHXoeYuUMPGFViG1Gscu9DhuFSgX852cdb1IW9RW9NQktUXnLTzxWCHBppymfdqOiHhXe1LjzI385ytVlBYwR7PsaFacnKawnz2z8P8oky6ai9dS5VpAO2RWVVRfE8hEJeHU1gncRcrhUYTzFdNklz2RmZ7lMWpCSSNld9db5bl0Vg8utLOFnK+2TLPWSKBAEAQBAEAQBAEAQBAL+AntMa7gH2tJFqH08fl+Ui9mX04qVOS5rf+fsWn7QKpxotVlduuOu1djY6H0PrOTgpEqN1OllYUk+TRYorw8kpVbj1VWXA8FlVjDTeHIkyE9cI6kzba+y3NTuqlNRk+DTfHls20Q4eJdVb7O3HsZUbnteW5LvINZyZfYrnU4aG8EnaNNz3tbVj2cOuoWdjOMuZG4oVacn4WiNMenGpqF9SvkW97hdyOBfDkCOcgpSnJ6XsjVUoUbWjHvYaqkt8NtJLlwa4kYyztqlropr+/wCzUji15kkyUYJPLeTPUvJSpunCKinxwvu22RWH22PkZbnY2K0BkzKuDZmzpEQBAEAQBAEAQBAEAQC92RkDHzEZvdbat8DONZJ05uDyS3Y1YNKIdC6xuf8AbsBfnOZ4lvdJqEVxb/0Wvqwwrnpt5sB7wPh1BE5GSmso7c29SzrunLivzKKb5lrMLLLnt72mVz/BOqEVwRGdzWqPMpNkXtrDkuy2vWoG9KdSWCrXLqWg/wBYp3ZxWO56se8fAc5zCSJSnOrJZ3eyFuCKMwY1h4mKc9dCSOX+ZCM9a1I1XFm7av3NR7kGdaox8fHQ8lXbD1lhizyKEHBAEAQBAEAQBAEAQBAO624XU9dEHXnATwXwxy7nssJBI2OfTy18IJSk28mllv8AXex0ym5X0P7NiPEH+A/nMtNd3WcOTPevZq87Pjcv3oPS/MxUQuTroef6zUfPnjoQ5B2dgCAavYKIbbciwk/V6+ID8+cz3DeFFcz2uxKcO9lXnvoWcFPKJv4sh98bsee/yAl0YqMVFcDyq9eVerKrLi3n89Cnl3NfdxuNEAD4yRW3nchg4IAgCAIAgCAIAgCAIB7ANCg8L8J5Bl8fOAXcsGnsLGr8bLOMj05n5iZoYlXk+iPduU6PZNKH6pN/n7FGjrvzUfrNJ4R7lj7VfwgFv6PtvMtqPuvWQfwma62ipdGe32E83EqX6otFLI+ypFZ94OQfw5TQnlHjTjobj02KTdZ0icwBAEAQBAEAQBAEAQBAHgYBqXVj2YI68v0gHefmNlVUK6KpqQjl4k/sBKqdPQ2+pvvb+V3GmpL3FgjxALKms2N8Wgu/CWmAjz34WXzgDByBjZFeRriKtvXnykKkNcXHqabO49muI1uhFl2nIyXuIAZzs6nYrTFIrr1XWqSqS4tlduskVHMAQBAEAQBAEAQBAEA6VC3hAJWp4FDfeHP0gF8WC6vjHUjmIBA/XQBgERXnscj5iAcsdnv7MA5PpACjnzgBF4mJ8IBy1f8AxgEZ5dYAgCAIAgCAegbOoBbxOzr8oFkAWtfesfko/GQlNRNFG2nV3TSj1ey/PTcX49VdgSqxrNfeK6/xJJ5K6ijF4i8litBwEMvI9J0rOGXu8PUQCuvFTZrop6QCccTNz5HygHjLwjn1gELDnADLodYBw+xoAHZgEippQN/GAeMRsjygEbDfUQCwnZ1l1HtcZhaB76gd5fwkHNReGaadpUqwc6fixxS4/IqMhXrJmdrBzBwQAOZgF7Ax6QzZGWT7Cv7o6ufACQm3jETZa06ervK3ur9+iX38jRTt2y3KpqFddGKGC+zVQeXxlXcKKb4s2y7TnXqQp7RhlLC6EfbeOaM06Gg44h85K3qa6ZX21a+zXbjH3XuiiLGUa3+0uPKPDaRpiesA6bTqOfWAeV2ez0loJrPMFeqwCa7R76kMh5Bh0gEBGzAJLOGkA3Ltz7tfzMAjUH+pYe+0A8Zh0gEZPOABs+EA2sa49m9kDICrx2vtAf55CZprvKmOSPct5u0su9XvSe356HF+Th9sLw2VDGzNdxl9xz5HynYwnTezyiNWvb38cSjpqcnyl5P+TEsQ1sVYEEciD4TQjxmmnhnEHBAJHtZkVN91fCCTk2kjlSdwRPrzQnafZ+HdeWQoBvWtsJ58ZOlVlFbn2FelTv7GnVqvTpW/mvzgYXaGBkYzMz0t7PZ0w5ia4VYz4M+duezrm3eZw268UU1qd0NgU8C62fDnLM74Mai2m0tkcc+I63OkTtbD0bcA9DNUxNbDR6g8wYB19ZKr9nUK28X6wCJSdk+J6kwDoNyO4B4oLsAo2T4QdSzwPa0Nh0B+8BJyeEbON2K92OnErV2E7PEeqmUSrxjLB61PsmtUpJ6WpdHzXVenMqdu5AaxMdAQtA0fjJUopJy6me/rzlLuZLGjYyg2juWmHJJkXG5gxHe1pj5nznEjs5OTyyKdIiAIBJjobLkrHViAPxnG8LJOEdclHqfT9s9rV4uOMLE4WsUAM+vc+HrMdCi3NzkfTdqdpU4U1bUeK4vkvTzIvo/2jl5OSMV+F0KkliOYA/WcuKVOMda2Y7G7Tuq1XuJ+KOM79EaXaWLj28ONY4p49sEUjZPnr9JXSqTjHVxN15Z29asrd4gnusPn1MLL7Ay8dt0lbk815EfETTTuqc9nszxLrsC7obx8S8v4KubiNiVUm0gu6lmUfd8v0MvjNSzjgeZXtpUIxc+LWcdOhSHpJGY7sRkVGYf1F4h8NkfKcTySlFxxk8qHE4UdSdTrOJZZdt7MylyDStZc+BU8iPAytVYadTexrdjX73uoxy/szV7N7FfFdb8m9EffcVdHn6kzNO6U/DBHuW/YdS3xVuJqL5Lz8/oy3nKvZeM2VRjIGL60RojcjF989DZbUg+zoSuIQW7XHlnl8GZ3Z/0gtGdxZmjQ50dL/T9RLZ20dGImG27bq+0KdxvF/t6Fb6SoozjahBW1QwIkrbOjD5FHbii7rXB5UkY00HjjcAQBAEAsYDFMpHX3kBYfEAmcZbReJp9M/siFmJOySSesIqznibf0UPBdlWgAstXLf89JnuYqUUme/wBgy0TqVFxS+/8AgyszKuysl7r3LWE9fKXwioxwjxa1edao6k3lm59HczIs9pXZazqle1Dc9TLc044TwfQ9jXtwnKLllJZ3+RsXYtGa7DIrB4u7sdQBKFN04R0npytKV1cVO9WeC9Nj5jNw68btL6uhYp/cec3Upa45Z8pe28KFy6UeCJe1Tx4+LsDu4yEaHmTucpPxS9S6/S7uj/4X1kXPo72fj3Y7ZFqlm2V0Ty1KbmtKG0T0OxOz6Fwu8qrO+PI08pjTRa1elKUsV5eR5Sil40lI9K5boylUp7OMZY+Dwj5HIy8jLIe+1mPhz5CejGnGCwkfIV7qtcScqsmz6HIyLMr6LG65t2a0T56Mxxgo3CwfT1a86/YspVN3t9T5TZ85uPkclu9i+Bj8R3wllHwkVxLpScqUc8v9lOSKRAEA/9k=" alt="" /> */}
        <img src={movie.poster} alt="" />
        <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.year}</p>
        </div>
        
    </div>
  )
}

export default Movie;