import Image from "next/image";

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image 
        src='https://icons8.com/icon/11324/loading'
        alt="spinner-frame-5"
        width={100}
        height={100}
        className="animate-pulse duration-700"
      />
    </div>
  )
}

export default Loading