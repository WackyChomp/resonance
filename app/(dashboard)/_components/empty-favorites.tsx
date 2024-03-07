import Image from 'next/image'

type Props = {}

const EmptyFavorites = (props: Props) => {
  return (
    <div className='flex flex-col items-center m-7'>
      <Image 
        src='https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif'
        alt='emptiness'
        width={100}
        height={100}
      />

      <p>
        No favorites here... {`:(`} 
      </p>
      <p>
        Go like something {`:)`}
      </p>
    </div>
  )
}

export default EmptyFavorites