import Image from "next/image";

export const NoPostsFound = () => {
  return (<div className='flex flex-col items-center w-full justify-center font-bold text-2xl text-white gap-5'>
    <h2>Vish, não encontrei nada por aqui...</h2>
    <Image src="/extras/robot.svg" alt="Robô triste" width={200} height={200} />
  </div>
  )
}
