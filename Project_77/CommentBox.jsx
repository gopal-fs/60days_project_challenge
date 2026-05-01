import React from 'react'

const CommentBox = (props) => {

  const comments = props.data;

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} className='flex border-l-1 pl-2 border-black gap-5 mb-5'>
          <div >
            <img className='h-[45px] w-[45px] rounded-full' src="https://styles.redditmedia.com/t5_fwgjpo/styles/communityIcon_uwohl6yhwb1g1.png?width=48&height=48&frame=1&auto=webp&crop=48%3A48%2Csmart&s=88fb012529bf2a97ee4814533acf2c9c5f6c8547" alt="profileImg" />
          </div>
          <div className='flex flex-col gap-2'>
            <h1>{comment.username}</h1>
            <p>{comment.comment}</p>
            {/* <button className='bg-black rounded text-white cursor-pointer h-[25px] w-[70px]'>Replies</button> */}
            {comment.replies.length>0 && <CommentBox data={comment.replies} />}
             
          </div>
        </div>
      ))}


    </div>

  )
}

export default CommentBox