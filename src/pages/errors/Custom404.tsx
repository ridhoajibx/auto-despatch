
import { MdArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

type Props = {}

function Custom404({ }: Props) {
  const navigate = useNavigate();
  return (
    <div className='w-full bg-white text-gray-5 h-screen flex flex-col justify-center items-center'>
      <div className='mb-3 font-semibold uppercase text-primary'>404 - Page Not Found</div>
      <p className='mb-3 lg:text-2xl text-center'>The page you're looking for isn't available.</p>
      <button
        type="button"
        className="flex justify-center items-centers"
        onClick={e => navigate("/")}
      >
        <MdArrowBack className='w-5 h-5 mr-1' />
        <span>Back</span>
      </button>
    </div>
  )
}

export default Custom404