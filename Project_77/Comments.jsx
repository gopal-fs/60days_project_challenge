import {comments} from "../data.js"
import CommentBox from './CommentBox.jsx'


const Comments = () => {
    
  return (
    <div className='w-full bg-gray-700 min-h-screen flex flex-col justify-center items-center'>

        <div className='w-full max-w-[900px] overflow-hidden p-5 bg-white'>
            <CommentBox data={comments} />
        </div>

    </div>
  )
}

export default Comments